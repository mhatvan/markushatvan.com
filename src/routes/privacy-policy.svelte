<script>
  import { onMount } from 'svelte';
  import SEO from '../components/SEO.svelte';
  import ExternalLink from '../components/ExternalLink.svelte';

  let message = '';
  let didOptOut = false;
  const gaProperty = 'UA-81701707-3';
  const disableStr: string = `ga-disable-${gaProperty}`;

  onMount(() => {
    const hasDNTEnabled = navigator.doNotTrack || window.doNotTrack;
    // Disable tracking if the opt-out cookie exists or user has DNT enabled
    if (document.cookie.includes(`${disableStr}=true`) || hasDNTEnabled) {
      window[disableStr] = true;
      didOptOut = true;
    }
  });

  const handleGaOptOut = () => {
    try {
      document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/;secure;samesite=none`;
      window[disableStr] = true;
      didOptOut = true;
      message = 'Successfully deactivated Google Analytics!';
    } catch (error) {
      message = 'Deactivating Google Analytics failed';
    }
  };
</script>

<svelte:head>
  <title>Privacy Policy | Markus Hatvan</title>

  <meta
    name="description"
    content="We have drawn up this data protection declaration (version
    03.12.2020-221137263) to explain to you, in accordance with the provisions
    of the basic data protection regulation (EU) 2016/679, what information we
    collect, how we use data and what decision-making options you have as a
    visitor to this website."
  />
</svelte:head>

<SEO />

<div class="container mh-container">
  <h1>Privacy Policy</h1>
  <h2>Privacy</h2>
  <p>
    We have drawn up this data protection declaration (version
    03.12.2020-221137263) to explain to you, in accordance with the provisions
    of the
    <ExternalLink
      href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=221137263"
    >
      basic data protection regulation (EU) 2016/679
    </ExternalLink>, what information we collect, how we use data and what
    decision-making options you have as a visitor to this website.
  </p>
  <p>
    Unfortunately, it is in the nature of things that these explanations sound
    very technical, but we have tried to describe the most important things as
    simply and clearly as possible.
  </p>
  <h2>Automatic data storage</h2>
  <p>
    When you visit websites today, certain information is automatically created
    and stored, including on this website. When you visit our website as you are
    visiting it right now, our web server (the computer on which this website is
    stored) automatically stores information such as:
  </p>
  <ul>
    <li>the address (URL) of the accessed web page</li>
    <li>Browser and browser version</li>
    <li>the operating system used</li>
    <li>the address (URL) of the previously visited page (referrer URL)</li>
    <li>the host name and IP address of the device being accessed</li>
    <li>Date and time</li>
  </ul>
  <p>in files (web server log files).</p>
  <p>
    Usually web server log files are stored for two weeks and then automatically
    deleted. We do not pass on this data, but cannot exclude the possibility
    that this data may be viewed in the event of illegal behavior.
  </p>

  <h2>Cookies</h2>

  <p>
    Our website uses HTTP cookies to store user-specific data. In the following
    we explain what cookies are and why they are used so that you can better
    understand the following privacy policy.
  </p>

  <h3>What exactly are cookies?</h3>

  <p>
    Whenever you surf the Internet, you use a browser. Well-known browsers
    include Chrome, Safari, Firefox, Internet Explorer and Microsoft Edge. Most
    websites store small text files in your browser. These files are called
    cookies.
  </p>

  <p>
    One thing is not to be dismissed: Cookies are really useful little helpers.
    Almost all websites use cookies. More precisely, they are HTTP cookies,
    since there are other cookies for other applications. HTTP cookies are small
    files that are stored on your computer by our website. These cookie files
    are automatically stored in the cookie folder, quasi the "brain" of your
    browser. A cookie consists of a name and a value. When defining a cookie,
    one or more attributes must also be specified.
  </p>

  <p>
    Cookies store certain user data about you, such as language or personal page
    settings. When you return to our site, your browser transmits the
    "user-related" information back to our site. Thanks to the cookies, our
    website knows who you are and offers you the setting you are used to. In
    some browsers, each cookie has its own file, in others, such as Firefox, all
    cookies are stored in a single file.
  </p>

  <p>
    There are both first-party cookies and third-party cookies. First-party
    cookies are created directly by our site, third-party cookies are created by
    partner sites (e.g. Google Analytics). Each cookie is unique because each
    cookie stores different data. The expiration time of a cookie also varies
    from a few minutes to a few years. Cookies are not software programs and do
    not contain viruses, trojans or other "malware". Cookies also cannot access
    information on your PC.
  </p>

  <p>For example, cookie data can look like this:</p>
  <p>
    <b>Name:</b>
    _ga
    <br />
    <b>Value:</b>
    GA1.2.1326744211.152221137263-6
    <br />
    <b>Purpose:</b>
    Differentiation of website visitors
    <br />
    <b>Expiration date:</b>
    after 2 years
  </p>

  <p>A browser should be able to support these minimum sizes:</p>
  <ul>
    <li>At least 4096 bytes per cookie</li>
    <li>At least 50 cookies per domain</li>
    <li>At least 3000 cookies in total</li>
  </ul>

  <h3>What types of cookies are there?</h3>

  <p>
    The question which cookies we use in particular depends on the services used
    and is clarified in the following sections of the privacy policy. At this
    point we would like to briefly discuss the different types of HTTP cookies.
  </p>

  <p>One can distinguish between 4 types of cookies:</p>

  <h4>Essential cookies</h4>
  <p>
    These cookies are necessary to ensure basic functions of the website. For
    example, these cookies are needed when a user adds a product to the shopping
    cart, then continues surfing on other pages, and later proceeds to checkout.
    These cookies do not delete the shopping cart, even if the user closes his
    browser window.
  </p>

  <h4>Useful cookies</h4>
  <p>
    These cookies collect information about user behavior and whether the user
    receives any error messages. In addition, these cookies also measure the
    loading time and the behavior of the website with different browsers.
  </p>

  <h4>Target-oriented cookies</h4>
  <p>
    These cookies ensure a better user experience. For example, entered
    locations, font sizes or form data are stored.
  </p>

  <h4>Advertising cookies</h4>
  <p>
    These cookies are also called targeting cookies. They are used to deliver
    customized advertising to the user. This can be very practical, but also
    very annoying. Usually the first time you visit a website, you will be asked
    which of these types of cookies you want to allow. And of course this
    decision is also stored in a cookie.
  </p>

  <h3>How can I delete cookies?</h3>

  <p>
    How and whether you want to use cookies is up to you. Regardless of the
    service or website from which the cookies originate, you always have the
    option of deleting, deactivating or only partially allowing cookies. For
    example, you can block third-party cookies, but allow all other cookies. If
    you want to find out which cookies are stored in your browser, if you want
    to change or delete cookie settings, you can find this in your browser
    settings:
  </p>
  <p>
    <b>Chrome:</b>
    <ExternalLink
      href="https://support.google.com/chrome/answer/95647?tid=221137263"
    >
      Delete, activate and manage cookies in Chrome
    </ExternalLink>
    <br />
    <b>Safari:</b>
    <ExternalLink
      href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221137263"
    >
      Manage cookies and website data with Safari
    </ExternalLink>
    <br />
    <b>Firefox:</b>
    <ExternalLink
      href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221137263"
    >
      delete cookies to remove data that websites have placed on your computer
    </ExternalLink>
    <br />
    <b>Internet Explorer:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=2211372633"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
    <b>Microsoft Edge:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221137263"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
  </p>
  <p>
    If you do not wish to receive cookies, you can set your browser to notify
    you whenever a cookie is set. In this way, you can decide for each
    individual cookie whether or not you wish to accept it. The procedure varies
    from browser to browser. The best way to find the instructions is to search
    Google using the search term "Delete Chrome cookies" or "Disable Chrome
    cookies" in the case of a Chrome browser.
  </p>

  <h3>What about my privacy?</h3>

  <p>
    The so-called "cookie guidelines" have been in place since 2009. They state
    that the storage of cookies requires your consent. Within the EU countries,
    however, there are still very different reactions to these guidelines. In
    Austria, however, this guideline was implemented in § 96 para. 3 of the
    Telecommunications Act (TKG). If you want to know more about cookies and are
    not afraid of technical documentation, we recommend
    <ExternalLink href="https://tools.ietf.org/html/rfc6265">
      https://tools.ietf.org/html/rfc6265
    </ExternalLink>, the Request for Comments of the Internet Engineering Task
    Force (IETF) called "HTTP State Management Mechanism".
  </p>

  <h2>Storage of personal data</h2>

  <p>
    Personal information that you submit to us electronically on this website,
    such as your name, e-mail address, postal address or other personal
    information when submitting a form or comments on the blog, together with
    the time and IP address, will only be used by us for the purpose stated in
    each case, will be kept securely stored and will not be disclosed to third
    parties. Thus, we use your personal data only for communication with those
    visitors who expressly request contact and for the processing of the
    services and products offered on this website. We will not pass on your
    personal data without your consent, but we cannot exclude the possibility
    that this data may be viewed in the event of unlawful behaviour. If you send
    us personal data by e-mail - thus off this website - we cannot guarantee
    secure transmission and protection of your data. We recommend that you never
    send confidential data by e-mail without encryption.
  </p>

  <h2>Rights according to the basic data protection regulation</h2>

  <p>
    In accordance with the provisions of the DSGVO and the Austrian
    <ExternalLink
      href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=221137263"
    >
      Data Protection Act (DSG)
    </ExternalLink>, you have the following rights:
  </p>

  <ul>
    <li>Right to correction (Article 16 DSGVO)</li>
    <li>Right of deletion ("right to be forgotten") (Article 17 DSGVO)</li>
    <li>Right to restrict processing (Article 18 DSGVO)</li>
    <li>
      Right of notification - Obligation to notify in connection with the
      correction or deletion of personal data or the restriction of processing
      (Article 19 DPA)
    </li>
    <li>Right to data transferability (Article 20 DSGVO)</li>
    <li>Right of objection (Article 21 DSGVO)</li>
    <li>
      Right not to be subject to a decision based solely on automated
      processing, including profiling (Article 22 DPA)
    </li>
  </ul>
  <p>
    If you believe that the processing of your data violates data protection law
    or your data protection rights have otherwise been violated in any way, you
    can complain to the supervisory authority, which in Austria is the data
    protection authority, whose website you can find at
    <ExternalLink href="https://www.dsb.gv.at/?tid=221137263">
      https://www.dsb.gv.at/
    </ExternalLink>.
  </p>

  <h2>Evaluation of visitor behavior</h2>
  <p>
    In the following data protection declaration, we inform you whether and how
    we evaluate data from your visit to this website. The evaluation of the
    collected data is usually anonymous and we cannot draw any conclusions about
    your personal behavior on this website. You can find out more about how to
    object to this evaluation of visit data in the following data protection
    declaration.
  </p>

  <h2>TLS encryption with https</h2>

  <p>
    We use https to transmit data tap-proof on the Internet (
    <ExternalLink
      href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=221137263"
    >
      data protection through technology design article 25 paragraph 1 DSGVO
    </ExternalLink>). By using TLS (Transport Layer Security), an encryption
    protocol for secure data transmission on the Internet, we can ensure the
    protection of confidential data. You can recognize the use of this data
    transmission security by the small lock symbol in the upper left corner of
    the browser and the use of the scheme https (instead of http) as part of our
    internet address.
  </p>

  <h2>Google Fonts Local Privacy Policy</h2>

  <p>
    On our website we use Google Fonts from Google Inc. The company Google
    Ireland Limited (Gordon House, Barrow Street Dublin 4, Ireland) is
    responsible for the European area. We have integrated the Google fonts
    locally, i.e. on our web server - not on the servers of Google. This means
    that there is no connection to Google servers and therefore no data transfer
    or storage.
  </p>

  <h3>What are Google Fonts?</h3>

  <p>
    In former times Google Fonts were also called Google Web Fonts. This is an
    interactive directory with over 800 fonts, which
    <ExternalLink href="https://de.wikipedia.org/wiki/Google_LLC?tid=221137263">
      Google
    </ExternalLink>
    provides free of charge. With Google Fonts you could use fonts without
    uploading them to your own server. But to prevent any information transfer
    to Google servers, we downloaded the fonts to our server. In this way, we
    act in accordance with data protection laws and do not send any data to
    Google Fonts. Unlike other web fonts, Google allows us unlimited access to
    all fonts. This means that we have unlimited access to a sea of fonts and
    can thus get the best out of our website. More about Google Fonts and other
    questions can be found at
    <ExternalLink href="https://developers.google.com/fonts/faq?tid=221137263">
      https://developers.google.com/fonts/faq?tid=221137263
    </ExternalLink>.
  </p>

  <h2>Google Analytics Privacy Policy</h2>

  <p>
    On our website we use the analysis tracking tool Google Analytics (GA) of
    the American company Google Inc. For the European area the company Google
    Ireland Limited (Gordon House, Barrow Street Dublin 4, Ireland) is
    responsible for all Google services. Google Analytics collects data about
    your actions on our website. For example, when you click on a link, this
    action is stored in a cookie and sent to Google Analytics. With the help of
    the reports we receive from Google Analytics, we can better tailor our
    website and services to your needs. In the following we will go into more
    detail about the tracking tool and inform you in particular about what data
    is stored and how you can prevent this.
  </p>

  <h3>What is Google Analytics?</h3>

  <p>
    Google Analytics is a tracking tool that serves to analyze the data traffic
    on our website. To make Google Analytics work, a tracking code is built into
    the code of our website. When you visit our website, this code records
    various actions that you perform on our website. As soon as you leave our
    website, this data is sent to the Google Analytics servers and stored there.
    Google processes the data and we receive reports about your user behavior.
    These reports may include the following:
  </p>
  <ul>
    <li>
      Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User
      besser kennen und wissen genauer, wer sich für unser Service interessiert.
    </li>
    <li>
      Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung
      leichter analysieren und verbessern.
    </li>
    <li>
      Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche
      Informationen darüber, wie wir mehr Menschen für unser Service begeistern
      können.
    </li>
    <li>
      Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website
      interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite
      zurücklegen und welche Links Sie
    </li>anklicken.
    <li>
      Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie
      aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum
      Beispiel, wenn Sie von einem
    </li>reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden.
    Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere
    Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate
    steigern.
    <li>
      Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer
      Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text
      lesen.
    </li>
  </ul>

  <h3>Why do we use Google Analytics on our website?</h3>

  <p>
    Our goal with this website is clear: We want to offer you the best possible
    service. The statistics and data from Google Analytics help us to achieve
    this goal. The statistically evaluated data give us a clear picture of the
    strengths and weaknesses of our website. On the one hand, we can optimize
    our site so that it can be found more easily by interested people on Google.
    On the other hand, the data helps us to better understand you as a visitor.
    We therefore know exactly what we need to improve on our website in order to
    offer you the best possible service. The data also helps us to carry out our
    advertising and marketing measures more individually and cost-effectively.
    After all, it only makes sense to show our products and services to people
    who are interested.
  </p>
  <h3>Which data is stored by Google Analytics?</h3>

  <p>
    Google Analytics uses a tracking code to create a random, unique ID
    associated with your browser cookie. This way Google Analytics recognizes
    you as a new user. The next time you visit our site, you will be recognized
    as a "returning" user. All collected data is stored together with this user
    ID. This makes it possible to evaluate pseudonymous user profiles. Through
    identifiers such as cookies and app instance IDs, your interactions on our
    website are measured. Interactions are all kinds of actions you perform on
    our website. If you also use other Google systems (such as a Google
    account), data generated by Google Analytics can be linked to third-party
    cookies. Google does not pass on any Google Analytics data unless we as the
    website operator authorize it. Exceptions may be made if required by law.
  </p>

  <p>The following cookies are used by Google Analytics:</p>

  <p>
    <b>Name:</b>
    _ga
    <br />
    <b>Value:</b>
    2.1326744211.152221137263-5
    <br />
    <b>Purpose:</b>
    By default, analytics.js uses the _ga cookie to store the user ID.
    Basically, it is used to differentiate between website visitors.
    <br />
    <b>Expiration date:</b>
    after 2 years
  </p>
  <p>
    <b>Name:</b>
    _gid
    <br />
    <b>Value:</b>
    2.1687193234.152221137263-1
    <br />
    <b>Purpose:</b>
    The cookie is also used to differentiate between website visitors
    <br />
    <b>Expiration date:</b>
    after 24 hours
  </p>
  <p>
    <b>Name:</b>
    _gat_gtag_UA_property-id
    <br />
    <b>Value:</b>
    1
    <br />
    <b>Purpose:</b>
    Used to lower the request rate. If Google Analytics is provided via the
    Google Tag Manager, this cookie is named _dc_gtm_property-id.
    <br />
    <b>Expiration date:</b>
    after 1 minute
  </p>

  <p>
    <b>Note:</b>
    This enumeration cannot claim to be complete, as Google always changes the
    choice of its cookies.
  </p>
  <p>
    Here we show you an overview of the most important data collected with
    Google Analytics:
  </p>

  <p>
    <b>Heat maps:</b> Google creates so-called heat maps. With Heatmaps you can
    see exactly those areas that you click on. This way we get information where
    you are "on the road" on our site.
  </p>
  <p>
    <b>Session duration:</b>
    Google defines session duration as the time you spend on our site without
    leaving the site. If you have been inactive for 20 minutes, the session ends
    automatically.
  </p>

  <p>
    <b>Bouncerate:</b>
    A bouncer is when you only view one page on our website and then leave our
    website.
  </p>

  <p>
    <b>Account creation:</b>
    When you create an account or place an order on our website, Google
    Analytics collects this data.
  </p>

  <p>
    <b>IP address:</b> The IP address is only shown in abbreviated form so that
    no clear assignment is possible.
  </p>

  <p>
    <b>Location:</b> The IP address can be used to determine the country and
    your approximate location. This process is also known as IP location
    determination.
  </p>
  <p>
    <b>Technical Information:</b> Technical information includes your browser
    type, your internet provider or your screen resolution.
  </p>
  <p>
    <b>Source of origin:</b>
    Google Analytics or we are naturally also interested in which website or
    which advertisement brought you to our site.
  </p>
  <p>
    Further data are contact details, any ratings, playing media (e.g. when you
    play a video on our site), sharing content via social media or adding to
    your favorites. This list does not claim to be exhaustive and serves only as
    a general orientation for data storage by Google Analytics.
  </p>

  <h3>How long and where is the data stored?</h3>

  <p>
    Google has distributed your servers all over the world. Most of the servers
    are located in America and therefore your data is usually stored on American
    servers. Here you can find out exactly where the Google data centers are
    located:
    <ExternalLink
      href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
    >
      https://www.google.com/about/datacenters/inside/locations/?hl=de
    </ExternalLink>
  </p>
  <p>
    Your data is distributed on different physical media. This has the advantage
    that the data can be retrieved more quickly and is better protected against
    manipulation. In every Google data center there are appropriate emergency
    programs for your data. If, for example, Google's hardware fails or natural
    disasters paralyze servers, the risk of a service interruption at Google
    remains low. Google Analytics has a standard retention period of 26 months
    for your user data. Then your user data will be deleted. However, we do have
    the option to choose the retention period of user data ourselves. We have
    five options for this:
  </p>

  <ul>
    <li>Deletion after 14 months</li>
    <li>Deletion after 26 months</li>
    <li>Deletion after 38 months</li>
    <li>Deletion after 50 months</li>
    <li>No automatic deletion</li>
  </ul>

  <p>
    When the specified period has expired, the data is deleted once a month.
    This retention period applies to your data associated with cookies, user
    recognition and advertising IDs (e.g., DoubleClick domain cookies).
    Reporting results are based on aggregated data and are stored independently
    of user data. Aggregated data is a fusion of individual data into a larger
    unit.
  </p>

  <h3>How can I delete my data or prevent data storage?</h3>

  <p>
    According to the data protection law of the European Union, you have the
    right to obtain information about your data, update it, delete it or
    restrict its storage. By using the browser add-on to deactivate Google
    Analytics JavaScript (ga.js, analytics.js, dc.js) you can prevent Google
    Analytics from using your data. You can download and install the browser
    add-on at
    <ExternalLink href="https://tools.google.com/dlpage/gaoptout?hl=de">
      https://tools.google.com/dlpage/gaoptout?hl=de
    </ExternalLink>. Please note that this add-on only disables the data
    collection by Google Analytics. If you basically want to deactivate, delete
    or manage cookies (independent of Google Analytics), there are separate
    instructions for each browser:
  </p>

  <p>
    <b>Chrome:</b>
    <ExternalLink
      href="https://support.google.com/chrome/answer/95647?tid=221137263"
    >
      Delete, activate and manage cookies in Chrome
    </ExternalLink>
    <br />
    <b>Safari:</b>
    <ExternalLink
      href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221137263"
    >
      Manage cookies and website data with Safari
    </ExternalLink>
    <br />
    <b>Firefox:</b>
    <ExternalLink
      href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221137263"
    >
      delete cookies to remove data that websites have placed on your computer
    </ExternalLink>
    <br />
    <b>Internet Explorer:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=2211372633"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
    <b>Microsoft Edge:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221137263"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
  </p>

  <p>
    Google Analytics is an active participant in the EU-U.S. Privacy Shield
    Framework, which regulates the correct and secure transfer of personal data.
    You can find more information about this at
    <ExternalLink
      href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
    >
      https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=221137263
    </ExternalLink>. We hope we were able to provide you with the most important
    information about data processing by Google Analytics. If you want to learn
    more about the tracking service, we recommend these two links:
    <ExternalLink href="http://www.google.com/analytics/terms/de.html">
      http://www.google.com/analytics/terms/de.html
    </ExternalLink>
    and
    <ExternalLink
      href="https://support.google.com/analytics/answer/6004245?hl=de"
    >
      https://support.google.com/analytics/answer/6004245?hl=de
    </ExternalLink>.
  </p>

  <h2>Google Analytics IP anonymization</h2>

  <p>
    We have implemented the IP address anonymization of Google Analytics on this
    website. This function was developed by Google so that this website can
    comply with the applicable data protection regulations and recommendations
    of local data protection authorities if they prohibit the storage of the
    complete IP address. IP addresses are anonymized or masked as soon as the IP
    addresses arrive in the Google Analytics data collection network and before
    the data is saved or processed. More information about IP anonymization can
    be found at
    <ExternalLink
      href="https://support.google.com/analytics/answer/2763052?hl=de"
    >
      https://support.google.com/analytics/answer/2763052?hl=de
    </ExternalLink>.
  </p>
  <h2>Google Analytics deactivation link</h2>

  <p>
    If you click on the following deactivation link, you can prevent Google from
    recording further visits to this website.
  </p>
  <p>
    <b>Attention:</b>
    Deleting cookies, using the incognito/private mode of your browser, or using
    another browser will result in data being collected again.
  </p>

  <button
    class="{didOptOut ? 'mb-4 rounded btn-primary opacity-50 cursor-not-allowed' : 'mb-4 rounded btn-primary'}"
    on:click="{handleGaOptOut}"
  >
    {didOptOut ? 'Already deactivated Google Analytics' : 'Deactivate Google Analytics'}
  </button>
  <br />

  <h2>Newsletter Privacy Policy</h2>

  <p>
    If you register for our newsletter, you provide the above mentioned personal
    data and give us the right to contact you by e-mail. We use the data stored
    during the registration for the newsletter exclusively for our newsletter
    and do not pass them on. If you unsubscribe from our newsletter - you will
    find the link for this at the bottom of every newsletter - we will delete
    all data that was saved when you subscribed to the newsletter.
  </p>
  <h2>MailChimp Privacy Policy</h2>

  <p>
    Like many other websites we use the services of the newsletter company
    MailChimp on our website. The operator of MailChimp is The Rocket Science
    Group, LLC, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308 USA.
    Thanks to MailChimp we can easily send you interesting news via newsletter.
    With MailChimp we do not need to install anything and can still draw from a
    pool of really useful functions. In the following we will go into more
    detail about this e-mail marketing service and inform you about the most
    important data protection aspects.
  </p>

  <h3>​What is MailChimp?</h3>

  <p>
    MailChimp is a cloud-based newsletter management service. "Cloudbased" means
    that we do not have to install MailChimp on our own computer or server.
    Instead, we use the service via an IT infrastructure - which is available
    via the Internet - on an external server. This way of using a software is
    also called SaaS (Software as a Service). With MailChimp we can choose from
    a wide range of different e-mail types. Depending on what we want to achieve
    with our newsletter, we can run single campaigns, regular campaigns,
    autoresponders (automatic emails), A/B tests, RSS campaigns (sending in
    predefined time and frequency) and follow-up campaigns.
  </p>

  <h3>​Why do we use MailChimp on our website?</h3>

  <p>
    Basically we use a newsletter service to keep in touch with you. We want to
    tell you what's new with us or what attractive offers we currently have in
    our program. For our marketing activities we always look for the simplest
    and best solutions. And that's why we have chosen the newsletter management
    service of Mailchimp. Although the software is very easy to use, it offers a
    large number of helpful features. So we can create interesting and beautiful
    newsletters in a very short time. Thanks to the offered design templates we
    can create each newsletter individually and thanks to the "Responsive
    Design" our content will be displayed legibly and beautifully on your
    smartphone (or any other mobile device). Through tools such as the A/B test
    or the extensive analysis options, we can see very quickly how our
    newsletters are received by you. So we can react if necessary and improve
    our offer or our services. Another advantage is the "cloud system" of
    Mailchimp. The data is not stored and processed directly on our server. We
    can retrieve the data from external servers and thus save our storage space.
    In addition, the maintenance effort is significantly lower.
  </p>

  <h2>​Which data is stored by MailChimp?</h2>

  <p>
    The Rocket Science Group LLC (MailChimp) maintains online platforms that
    allow us to contact you (if you have subscribed to our newsletter). If you
    become a subscriber of our newsletter via our website, you confirm your
    membership in an e-mail list of MailChimp by e-mail. To enable MailChimp to
    prove that you have subscribed to the "list provider", the date of your
    subscription and your IP address will be saved. Furthermore MailChimp stores
    your e-mail address, name, physical address and demographic information,
    such as language or location. This information is used to send you e-mails
    and to enable certain other MailChimp functions (such as newsletter
    evaluation). MailChimp also shares information with third parties to provide
    better services. MailChimp also shares some information with third-party
    advertising partners to better understand the interests and concerns of our
    customers and to provide more relevant content and targeted advertising. By
    means of so-called "web beacons" (these are small graphics in HTML e-mails)
    MailChimp can determine whether the e-mail has arrived, whether it has been
    opened and whether links have been clicked on. All this information is
    stored on the MailChimp servers. Thus we get statistical evaluations and see
    exactly how well our newsletter was received by you. This way we can adapt
    our offer much better to your wishes and improve our service. MailChimp may
    also use this data to improve its own service. This can be used, for
    example, to technically optimize the dispatch or to determine the location
    (country) of the recipients. The following cookies can be set by Mailchimp.
    This is not a complete cookie list, but rather an exemplary selection:
  </p>

  <p>
    <b>Name:</b>
    AVESTA_ENVIRONMENT
    <br />
    <b>Value:</b>
    Prod
    <br />
    <b>Use:</b>
    This cookie is necessary to provide the mailchimp services. It is always set
    when a user subscribes to a newsletter mailing list.
    <br />
    <b>Expiration date:</b>
    after session end
  </p>

  <p>
    <b>Name:</b>
    ak_bmsc
    <br />
    <b>Value:</b>
    F1766FA98C9BB9DE4A39F70A9E5EEAB55F6517348A7000001221137263-3
    <br />
    <b>Use:</b>
    The cookie is used to distinguish a human from a bot. This allows secure
    reports to be generated about the use of a website.
    <br />
    <b>Expiration date:</b>
    after 2 hours
  </p>

  <p>
    <b>Name:</b>
    bm_svWert: A5A322305B4401C2451FC22FFF547486~FEsKGvX8eovCwTeFTzb8//I3ak2Au...
    <br />
    <b>Purpose:</b>
    The cookie is from MasterPass Digital Wallet (a MasterCard service) and is
    used to provide a visitor with a secure and easy way to make a virtual
    payment transaction. For this purpose, the user is anonymously identified on
    the website.
    <br />
    <b>Expiration date:</b>
    after 2 hours
  </p>
  <p>
    <b>Name:</b>
    _abck
    <br />
    <b>Value:</b>
    Purpose:0579014C449B045221137263-9
    <br />
    <b>Purpose:</b>
    We were unable to learn more about the purpose of this cookie
    <br />
    <b>Expiration date:</b>
    after one year Sometimes it can happen that you open our newsletter for a
    better presentation via a given link.
  </p>

  <p>
    This is the case, for example, if your e-mail program does not work or the
    newsletter is not displayed correctly. The newsletter is then displayed on a
    MailChimp website. MailChimp also uses cookies (small text files that store
    data on your browser) on its own websites. Personal data may be processed by
    MailChimp and its partners (e.g. Google Analytics). This data collection is
    the responsibility of MailChimp and we have no influence on it. In the
    "Cookie Statement" of MailChimp (under:
    <ExternalLink href="https://mailchimp.com/legal/cookies/">
      https://mailchimp.com/legal/cookies/
    </ExternalLink>) you can read exactly how and why the company uses cookies.
  </p>

  <p>
    Sometimes it can happen that you open our newsletter for a better
    presentation via a given link. This is the case, for example, if your e-mail
    program does not work or the newsletter is not displayed correctly. The
    newsletter is then displayed on a MailChimp website. MailChimp also uses
    cookies (small text files that store data on your browser) on its own
    websites. Personal data may be processed by MailChimp and its partners (e.g.
    Google Analytics). This data collection is the responsibility of MailChimp
    and we have no influence on it. In the "Cookie Statement" of MailChimp
    (under: https://mailchimp.com/legal/cookies/) you can read exactly how and
    why the company uses cookies.
  </p>

  <h3>How long and where is the data stored?</h3>

  <p>
    Since MailChimp is an American company, all collected data is also stored on
    American servers. In principle, the data remains permanently stored on the
    servers of Mailchimp and is only deleted when you request it. You can have
    your contact deleted by us. This permanently removes all your personal data
    and makes you anonymous in the Mailchimp reports. However, you can also
    request the deletion of your data directly at MailChimp. Then all your data
    will be removed there and we will get a notification from MailChimp. After
    we receive the email, we have 30 days to delete your contact from all
    connected integrations.
  </p>

  <h3>How can I delete my data or prevent data storage?</h3>

  <p>
    You can withdraw your consent to receive our newsletter at any time within
    the received e-mail by clicking on the link in the lower area. If you have
    unsubscribed by clicking on the unsubscribe link, your data will be deleted
    by MailChimp. If you access a MailChimp website via a link in our newsletter
    and cookies are set in your browser, you can delete or deactivate these
    cookies at any time. Depending on the browser, deactivating or deleting
    works slightly different. The following instructions show how to manage
    cookies in your browser:
  </p>
  <p>
    <b>Chrome:</b>
    <ExternalLink
      href="https://support.google.com/chrome/answer/95647?tid=221137263"
    >
      Delete, activate and manage cookies in Chrome
    </ExternalLink>
    <br />
    <b>Safari:</b>
    <ExternalLink
      href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221137263"
    >
      Manage cookies and website data with Safari
    </ExternalLink>
    <br />
    <b>Firefox:</b>
    <ExternalLink
      href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221137263"
    >
      delete cookies to remove data that websites have placed on your computer
    </ExternalLink>
    <br />
    <b>Internet Explorer:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=2211372633"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
    <b>Microsoft Edge:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221137263"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
  </p>

  <p>
    If you do not wish to receive cookies, you can set up your browser so that
    it always informs you when a cookie is to be set. In this way, you can
    decide for each individual cookie whether you wish to allow it or not.
  </p>

  <p>
    MailChimp is an active participant in the EU-U.S. Privacy Shield Framework
    which regulates the correct and secure transfer of personal data. You can
    find more information about this on
    <ExternalLink
      href="https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG"
    >
      https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&tid=221137263
    </ExternalLink>. You can learn more about the use of cookies at
    <ExternalLink href="
    https://mailchimp.com/legal/cookies/">
      https://mailchimp.com/legal/cookies/
    </ExternalLink>, information about data protection at MailChimp (Privacy)
    can be found at
    <ExternalLink href="
    https://mailchimp.com/legal/privacy/">
      https://mailchimp.com/legal/privacy/
    </ExternalLink>
    .
  </p>

  <h3>​MailChimp order data processing contract</h3>
  <p>
    We have signed a contract with MailChimp for the Data Processing Addendum.
    This contract serves to protect your personal data and ensures that
    MailChimp complies with the applicable data protection regulations and does
    not pass on your personal data to third parties. More information about this
    agreement can be found at
    <ExternalLink href="https://mailchimp.com/legal/data-processing-addendum/">
      https://mailchimp.com/legal/data-processing-addendum/
    </ExternalLink>.
  </p>

  <h2>​Amazon Partner Program Privacy Policy</h2>
  <p>
    We use the Amazon Partner Program of Amazon.com, Inc. on our Web site. The
    responsible parties within the meaning of the data protection declaration
    are Amazon Europe Core S.à.r.l., Amazon EU S.à.r.l., Amazon Services Europe
    S.à.r.l. and Amazon Media EU S.à.r.l., all four of which are located at 5,
    Rue Plaetis, L-2338 Luxembourg and Amazon Instant Video Germany GmbH,
    Domagkstr. 28, 80807 Munich. The data processor is Amazon Deutschland
    Services GmbH, Marcel-Breuer-Str. 12, 80807 Munich. By using this Amazon
    partner program, data from you can be transferred, stored and processed at
    Amazon. In this privacy policy, we inform you what data is involved, why we
    use the program and how you can manage or prevent data transfer.
  </p>

  <h3>​What is the Amazon affiliate program?</h3>
  <p>
    The Amazon partner program is an affiliate marketing program of the on-line
    dispatch enterprise
    <ExternalLink
      href="https://www.amazon.de/ref=as_li_ss_tl?site-redirect=at&linkCode=ll2&tag=thetraffic-21&linkId=16a65fb03b8cb39206283c5345d87944&language=de_DE&tid=221137263"
    >
      Amazon.de
    </ExternalLink>. Like every affiliate program, the Amazon partner program is
    based on the principle of commission. Amazon or we place advertising or
    partner links on our website and if you click on them and buy a product
    through Amazon, we receive a refund of advertising costs (commission).
  </p>

  <h3>​Why do we use the Amazon affiliate program on our website?</h3>
  <p>
    Our goal is to provide you with a pleasant time with lots of helpful
    content. Therefore we put a lot of work and energy into the development of
    our website. With the help of the Amazon partner program we have the
    possibility to get a little reward for our work. Every partner link to
    Amazon has of course always to do with our topic and shows offers that might
    be of interest to you.
  </p>

  <h3>​What data is stored by the Amazon affiliate program?</h3>
  <p>
    When you interact with Amazon's products and services, Amazon collects
    information from you. Amazon distinguishes between information that you
    actively provide to the company and information that is automatically
    collected and stored. Active information" includes, for example, name,
    e-mail address, telephone number, age, payment information or location
    information. So-called "automatic information" is primarily stored via
    cookies. This includes information on user behavior, IP address, device
    information (browser type, location, operating systems) or the URL. Amazon
    also stores the clickstream. This refers to the path (sequence of pages)
    that you as a user take to get to a product. Amazon also stores cookies in
    your browser to be able to trace the origin of an order. This is how the
    company recognizes that you have clicked on an Amazon advertisement or
    partner link via our website. If you have an Amazon account and are logged
    in while browsing our site, the information collected may be associated with
    your account. You can prevent this by logging out of Amazon before surfing
    our site.
  </p>

  <p>
    Here we show you exemplary cookies that are set in your browser when you
    click on an Amazon link on our website.
  </p>
  <p>
    <b>Name:</b>
    uid
    <br />
    <b>Value:</b>
    3230928052675285215221137263-9
    <br />
    <b>Use:</b>
    This cookie stores a unique user ID and collects information about your site
    activity.
    <br />
    <b>Expiration date:</b>
    after 2 months
  </p>
  <p>
    <b>Name:</b>
    ad-id
    <br />
    <b>Value:</b>
    AyDaInRV1k-Lk59xSnp7h5o
    <br />
    <b>Use:</b>
    This cookie is provided by amazon-adsystem.com and serves the company for
    various advertising purposes.
    <br />
    <b>Expiration date:</b>
    after 8 months
  </p>
  <p>
    <b>Name:</b>
    uuid2
    <br />
    <b>Value:</b>
    8965834524520213028221137263-2
    <br />
    <b>Use:</b>
    This cookie enables targeted and interest based advertising via the AppNexus
    platform. For example, the cookie collects and stores anonymous data about
    the IP address, which advertisements you have clicked on and which pages you
    have visited.
    <br />
    <b>Expiration date:</b>
    after 3 months
  </p>
  <p>
    <b>Name:</b>
    session-id
    <br />
    <b>Value:</b>
    262-0272718-2582202221137263-1
    <br />
    <b>Use:</b>
    This cookie stores a unique user ID that the server assigns to you for the
    duration of a website visit (session). If you visit the same page again, the
    information stored in the cookie will be retrieved.
    <br />
    <b>Expiration date:</b>
    after 15 years
  </p>
  <p>
    <b>Name:</b>
    APID
    <br />
    <b>Value:</b>
    UP9801199c-4bee-11ea-931d-02e8e13f0574
    <br />
    <b>Use:</b>
    This cookie stores information about how you use a Web site and what
    advertisements you viewed before visiting the site.
    <br />
    <b>Expiration date:</b>
    after one year
  </p>
  <p>
    <b>Name:</b>
    session-id-time
    <br />
    <b>Value:</b>
    tb:s-STNY7ZS65H5335FZEVPE|1581329862486&t:1581329864300&adb:adblk_no
    <br />
    <b>Use:</b>
    This cookie records the time you spend on a Web page with a unique cookie
    ID.
    <br />
    <b>Expiration date:</b>
    after 2 years
  </p>

  <p>
    <b>Name:</b>
    csm-hit
    <br />

    <b>Value:</b>
    2082754801l
    <br />
    <b>Use:</b>
    We could not obtain any precise information about this cookie.
    <br /><b>Expiration date:</b>
    after 15 years
  </p>

  <p>
    <b>Note:</b>
    Please note that this list only shows cookie examples and cannot claim to be
    complete. Amazon uses this information to tailor advertisements more closely
    to the interests of users.
  </p>
  ​
  <h3>How long and where is the data stored?</h3>
  <p>
    Personal data is stored by Amazon for as long as it is necessary for
    Amazon's business services or for legal reasons. Since Amazon is
    headquartered in the USA, the collected data is also stored on American
    servers. ​
  </p>

  <h3>How can I delete my data or prevent data storage?</h3>
  <p>
    You have the right to access and delete your personal data at any time. If
    you have an Amazon account, you can manage or delete much of the data
    collected in your account. Your browser offers another option to manage
    Amazon's data processing and storage according to your preferences. There
    you can manage, deactivate or delete cookies. This works a little
    differently with each browser. Here you will find instructions for the most
    common browsers:
  </p>

  <p>
    <b>Chrome:</b>
    <ExternalLink
      href="https://support.google.com/chrome/answer/95647?tid=221137263"
    >
      Delete, activate and manage cookies in Chrome
    </ExternalLink>
    <br />
    <b>Safari:</b>
    <ExternalLink
      href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221137263"
    >
      Manage cookies and website data with Safari
    </ExternalLink>
    <br />
    <b>Firefox:</b>
    <ExternalLink
      href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221137263"
    >
      delete cookies to remove data that websites have placed on your computer
    </ExternalLink>
    <br />
    <b>Internet Explorer:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=2211372633"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
    <b>Microsoft Edge:</b>
    <ExternalLink
      href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221137263"
    >
      Delete and manage cookies
    </ExternalLink>
    <br />
  </p>

  <p>
    Amazon is an active participant in the EU-U.S. Privacy Shield Framework,
    which regulates the correct transfer of personal data between the USA and
    the EU. More information can be found at
    <ExternalLink
      href="https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&tid=221137263"
    >
      https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4
    </ExternalLink>. We hope we have provided you with the most important
    information about data transfer through the use of the Amazon Partner
    Program. You can find more information at
    <ExternalLink
      href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
    >
      https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
    </ExternalLink>.
  </p>

  <p>
    Source: Created with the
    <ExternalLink href="https://www.firmenwebseiten.at/datenschutz-generator/">
      privacy generator
    </ExternalLink>
    from firmenwebseiten.at
  </p>

  <h2>This is how you can reach us</h2>
  <p>
    Markus Hatvan e.U.
    <br />
    Markus Hatvan
    <br />
    St.-Veit-Gasse 20/4
    <br />
    1130 Vienna
    <br />
    Austria
    <br />
    Phone:
    <a href="tel:+436647986649">+436647986649</a>
    <br />
    E-Mail:
    <a href="mailto:contact@markushatvan.com">contact@markushatvan.com</a>
  </p>
</div>

{#if message}
  <div
    class="fixed bottom-0 w-full px-4 py-3 text-blue-700 bg-blue-100 border border-blue-400"
    role="alert"
  >
    {message}
  </div>
{/if}
