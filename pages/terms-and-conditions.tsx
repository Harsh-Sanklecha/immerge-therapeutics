import { termsAndConditions } from "@/lib/utils/constants/termsAndConditions";
import { SortDescIcon } from "lucide-react";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title> Terms And Conditions | Immerge Therapeutics</title>
        <meta
          property="og:title"
          content="Terms And Conditions | Immerge Therapeutics"
        />
        <meta name="description" content="Immerge Therapeutics" />
      </Head>

      <section className="container mx-auto max-w-[1200px] p-4 pt-[8rem] pb-[4rem] md:pb-[8rem]">
        <div className="container mx-auto flex flex-col justify-center  text-start w-full">
          <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
          {/* <p>Welcome to verityHealXR!</p> */}
          <p>
            Welcome to Veritytech Healthcare Solutions Private Limited
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
          {/* <p className="my-4">
            These terms and conditions outline the rules and regulations for the
            use of Immerge Therapeutics&apos;s Website, located at{" "}
            <a href="https://www.immerge.co.in" className="text-blue-500">
              https://www.immerge.co.in/about-us/
            </a>
            .
          </p> */}
          <p className="my-4">
            These Terms and Conditions govern Your use of our website,
            accessible at{" "}
            <a href="https://www.immerge.co.in" className="text-blue-500">
              https://www.immerge.co.in/about-us/
            </a>
            .
          </p>

          {/* <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use verityHealXR if you do not agree
            to take all of the terms and conditions stated on this page.
          </p> */}

          <p>
            By accessing or using our Website, You agree to be bound by these
            Terms and Conditions. If You do not agree with any part of these
            Terms and Conditions, please do not use our Website.
          </p>

          <ol className="list-decimal list-inside [&>li]:text-xl [&>li]:font-bold [&>li]:my-4">
            {termsAndConditions.map((item, index) => (
              <li key={index}>
                {item.heading}{" "}
                {Array.isArray(item.content) ? (
                  <>
                    {item.description && (
                      <p className="font-normal text-base mt-4">{item.description}</p>
                    )}
                    <ol className="list-decimal list-inside ml-4 my-4 [&>li]:text-base [&>li]:font-normal [&>li]:my-4">
                      {item.content.map((desc: any, descInd) => {
                        // check if desc is an object or a string
                        if (typeof desc === "string" && desc !== null) {
                          return <li key={descInd}>{desc}</li>;
                        }
                        return (
                          <li key={descInd}>
                            <span className="font-semibold">
                              {desc.subheading}
                            </span>{" "}
                            {desc.content}
                          </li>
                        );
                      })}
                    </ol>
                  </>
                ) : (
                  <p className="font-normal text-base my-4">{item.content}</p>
                )}
              </li>
            ))}
          </ol>

          

          {/* <h3 className="text-xl font-bold my-4">Cookies</h3>
          <p>
            We employ the use of cookies. By accessing verityHealXR, you agreed
            to use cookies in agreement with the Immerge Therapeutics&apos;s Privacy
            Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the
            user&apos;s details for each visit. Cookies are used by our website
            to enable the functionality of certain areas to make it easier for
            people visiting our website. Some of our affiliate/advertising
            partners may also use cookies.
          </p>
          <h3 className="text-xl font-bold my-4">License</h3>
          <p>
            Unless otherwise stated, Immerge Therapeutics and/or its licensors own the
            intellectual property rights for all material on verityHealXR. All
            intellectual property rights are reserved. You may access this from
            verityHealXR for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <ul className="list-disc list-inside my-4">
            <li>Republish material from verityHealXR</li>
            <li>Sell, rent or sub-license material from verityHealXR</li>
            <li>Reproduce, duplicate or copy material from verityHealXR</li>
            <li>Redistribute content from verityHealXR</li>
          </ul>
          <p>
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the{" "}
            <a
              href="https://www.termsandconditionsgenerator.com/"
              className="text-blue-500"
            >
              Free Terms and Conditions Generator
            </a>
            .
          </p>
          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Immerge Therapeutics does not filter, edit, publish or review Comments
            prior to their presence on the website. Comments do not reflect the
            views and opinions of Immerge Therapeutics,its agents and/or affiliates.
            Comments reflect the views and opinions of the person who post their
            views and opinions. To the extent permitted by applicable laws,
            Immerge Therapeutics shall not be liable for the Comments or for any
            liability, damages or expenses caused and/or suffered as a result of
            any use of and/or posting of and/or appearance of the Comments on
            this website.
          </p>
          <p>
            Immerge Therapeutics reserves the right to monitor all Comments and to
            remove any Comments which can be considered inappropriate, offensive
            or causes breach of these Terms and Conditions.
          </p>
          <p>You warrant and represent that:</p>
          <ul className="list-disc list-inside my-4">
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <p>
            You hereby grant Immerge Therapeutics a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </p>
          <h3 className="text-xl font-bold my-4">
            Hyperlinking to our Content
          </h3>
          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <p>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party&apos;s site.
          </p>
          <p>
            We may consider and approve other link requests from the following
            types of organizations:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>
              commonly-known consumer and/or business information sources;
            </li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Verity Heal
            XR; and (d) the link is in the context of general resource
            information.
          </p>
          <p>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party&apos;s site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to Immerge Therapeutics. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </p>
          <p>Approved organizations may hyperlink to our Website as follows:</p>
          <ul className="list-disc list-inside my-4">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party&apos;s site.
            </li>
          </ul>
          <p>
            No use of Immerge Therapeutics&apos;s logo or other artwork will be
            allowed for linking absent a trademark license agreement.
          </p>
          <h3 className="text-xl font-bold my-4">iFrames</h3>
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
          <h3 className="text-xl font-bold my-4">Content Liability</h3>
          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
          <h3 className="text-xl font-bold my-4">Reservation of Rights</h3>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it&apos;s linking policy at any
            time. By continuously linking to our Website, you agree to be bound
            to and follow these linking terms and conditions.
          </p>
          <h3 className="text-xl font-bold my-4">
            Removal of links from our website
          </h3>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
          <h3 className="text-xl font-bold my-4">Disclaimer</h3>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p> */}
        </div>
        {/* <div className="w-full py-12 space-y-6 md:py-24">
        <div className="container space-y-6 px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Last updated: January 1, 2023
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Introduction</h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              voluptatem, voluptate veniam eaque autem facilis dicta eius
              corporis nesciunt ullam assumenda at unde doloribus cum
              dignissimos blanditiis soluta nemo omnis temporibus error
              excepturi consectetur ab magni! Delectus eveniet dolor quia.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Use of the Services
            </h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              impedit nulla aliquam nisi laboriosam doloremque, corrupti autem
              nemo eius eveniet animi nostrum, doloribus eaque tenetur cum ipsam
              totam magni enim. Hic laborum expedita, voluptate reiciendis optio
              provident totam sapiente obcaecati debitis temporibus est delectus
              placeat dolor doloremque, maiores vel nulla.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Intellectual Property
            </h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              accusantium!
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Termination</h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              accusamus inventore voluptate veritatis! Excepturi necessitatibus
              officia non sit blanditiis minus!
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Disclaimers and Limitation of Liability
            </h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              id, natus ipsum aut veniam, suscipit laborum iusto maiores
              voluptate quia dolorum voluptatem delectus aliquam numquam
              possimus in perferendis voluptatibus quo? Ad doloremque quidem
              repellat accusantium?
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Governing Law and Dispute Resolution
            </h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              These Terms shall be governed by and construed in accordance with
              the laws of the state of California, without giving effect to any
              choice or conflict of law provision. Any dispute arising out of or
              in connection with these Terms shall be resolved through binding
              arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Changes to the Terms
            </h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              expedita, deleniti ad necessitatibus molestias possimus aut unde
              corporis placeat porro!
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
            <p className="text-base text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              ut commodi facere!
            </p>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
}
