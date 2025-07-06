print_statement() {
    echo "--------------------"
    echo "-> $1"
    echo "--------------------"
    sleep 2
}

print_statement "Starting PM2 Deployment Process"

# Create deployment package with source code (excluding node_modules and .next)
print_statement "Creating application package"
tar -zcf app.tar.gz \
    .gitignore \
    components.json \
    package-lock.json \
    styles \
    README.md \
    next-env.d.ts \
    package.json \
    tailwind.config.ts \
    .eslintrc.json \
    assets \
    next.config.js \
    pages \
    tsconfig.json \
    components \
    public \
    lib \
    postcss.config.js \
    types \
    .env.local \
    2>/dev/null || { echo "Error creating tar.gz file"; exit 1; }

# Upload to server
scp app.tar.gz immerge: || { echo "Error uploading file to server"; exit 1; }

print_statement "Building and Deploying to PROD Server with PM2"

ssh immerge << EOF
# Ensure target directory exists
mkdir -p immerge-therapeutics/logs
cd immerge-therapeutics/

# Stop existing PM2 process if running
pm2 stop verity-web 2>/dev/null || echo "No existing process to stop"

# Extract new application
tar -xf /app.tar.gz -C . || { echo "Error extracting tar.gz file"; exit 1; }

# Install dependencies
npm install --legacy-peer-deps || { echo "Error installing dependencies"; exit 1; }

# Build application on server
npm run prod-build || { echo "Error building application"; exit 1; }

# Start/restart with PM2
pm2 start web-ecosystem.config.js --env production || { echo "Error starting PM2 process"; exit 1; }
pm2 save || echo "Warning: Could not save PM2 configuration"

# Cleanup
cd /
rm -f app.tar.gz || { echo "Error removing app.tar.gz"; exit 1; }
EOF

# Local cleanup
rm -f app.tar.gz

print_statement "Application Deployed and Built on PROD with PM2"
print_statement "Use 'ssh immerge' then 'pm2 status' to check deployment status"
