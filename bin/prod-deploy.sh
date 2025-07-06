print_statement() {
    echo "--------------------"
    echo "-> $1"
    echo "--------------------"
    sleep 2
}

print_statement "Starting PM2 Deployment Process"

print_statement "Building and Deploying to PROD Server with PM2"

ssh immerge << EOF
# Ensure target directory exists
mkdir -p immerge-therapeutics/logs
cd immerge-therapeutics/
git pull

# Stop existing PM2 process if running
pm2 stop verity-web 2>/dev/null || echo "No existing process to stop"

# Install dependencies
npm install --legacy-peer-deps || { echo "Error installing dependencies"; exit 1; }

# Build application on server
npm run prod-build || { echo "Error building application"; exit 1; }

# Start/restart with PM2
pm2 start web-ecosystem.config.js --env production || { echo "Error starting PM2 process"; exit 1; }
pm2 save || echo "Warning: Could not save PM2 configuration"
EOF

print_statement "Application Deployed and Built on PROD with PM2"
print_statement "Use 'ssh immerge' then 'pm2 status' to check deployment status"
