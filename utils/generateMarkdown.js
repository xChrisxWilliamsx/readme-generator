function renderLicenseBadge(license) {  
  if (license === "Academic Free License v3.0") {
    return`![Static Badge](https://img.shields.io/badge/License-AFL_3.0-lightblue.svg)`
  } else if (license === "Apache license 2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-Apache_2.0-lightblue.svg)`
  } else if (license === "Artistic license 2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-Artistic_2.0-lightblue.svg)`
  } else if (license === "Boost Software License 1.0") {
    return`![Static Badge](https://img.shields.io/badge/License-BSL_1.0-lightblue.svg)`
  } else if (license === "BSD 2-clause Simplified license") {
    return`![Static Badge](https://img.shields.io/badge/License-BSD_2_Clause-lightblue.svg)`
  } else if (license === "BSD 3-clause New or Revised license") {
    return`![Static Badge](https://img.shields.io/badge/License-BSD_3_Clause-lightblue.svg)`
  } else if (license === "BSD 3-clause Clear license") {
    return`![Static Badge](https://img.shields.io/badge/License-BSD_3_Clause_Clear-lightblue.svg)`
  } else if (license === "BSD 4-clause Original or Old license") {
    return`![Static Badge](https://img.shields.io/badge/License-BSD_4_Clause-lightblue.svg)`
  } else if (license === "BSD Zero-Clause license") {
    return`![Static Badge](https://img.shields.io/badge/License-0BSD-lightblue.svg)`
  } else if (license === "Creative Commons license family") {
    return`![Static Badge](https://img.shields.io/badge/License-CC-lightblue.svg)`
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return`![Static Badge](https://img.shields.io/badge/License-CC0_1.0-lightblue.svg)`
  } else if (license === "Creative Commons Attribution 4.0") {
    return`![Static Badge](https://img.shields.io/badge/License-CC_BY_4.0-lightblue.svg)`
  } else if (license === "Creative Commons Attribution ShareAlike 4.0") {
    return`![Static Badge](https://img.shields.io/badge/License-CC_BY_SA_4.0-lightblue.svg)`
  } else if (license === "Do What The F*ck You Want To Public License") {
    return`![Static Badge](https://img.shields.io/badge/License-WTFPL-lightblue.svg)`
  } else if (license === "Educational Community License v2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-ECL_2.0-lightblue.svg)`
  } else if (license === "Eclipse Public License 1.0") {
    return`![Static Badge](https://img.shields.io/badge/License-EPL_1.0-lightblue.svg)`
  } else if (license === "Eclipse Public License 2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-EPL_2.0-lightblue.svg)`
  } else if (license === "European Union Public License 1.1") {
    return`![Static Badge](https://img.shields.io/badge/License-EUPL_1.1-lightblue.svg)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return`![Static Badge](https://img.shields.io/badge/License-AGPL_3.0-lightblue.svg)`
  } else if (license === "GNU General Public License family") {
    return`![Static Badge](https://img.shields.io/badge/License-GPL-lightblue.svg)`
  } else if (license === "GNU General Public License v2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-GPL-2.0-lightblue.svg)`
  } else if (license === "GNU General Public License v3.0") {
    return`![Static Badge](https://img.shields.io/badge/License-GPL-3.0-lightblue.svg)`
  } else if (license === "GNU Lesser General Public License family") {
    return`![Static Badge](https://img.shields.io/badge/License-LGPL-lightblue.svg)`
  } else if (license === "GNU Lesser General Public License v2.1") {
    return`![Static Badge](https://img.shields.io/badge/License-LGPL_2.1-lightblue.svg)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return`![Static Badge](https://img.shields.io/badge/License-LGPL_3.0-lightblue.svg)`
  } else if (license === "ISC") {
    return`![Static Badge](https://img.shields.io/badge/License-ISC-lightblue.svg)`
  } else if (license === "LaTeX Project Public License v1.3c") {
    return`![Static Badge](https://img.shields.io/badge/License-LPPL_1.3c-lightblue.svg)`
  } else if (license === "Microsoft Public License") {
    return`![Static Badge](https://img.shields.io/badge/License-MS_PL-lightblue.svg)`
  } else if (license === "MIT") {
    return`![Static Badge](https://img.shields.io/badge/License-MIT-lightblue.svg)`
  } else if (license === "Mozilla Public License 2.0") {
    return`![Static Badge](https://img.shields.io/badge/License-MPL_2.0-lightblue.svg)`
  } else if (license === "Open Software License 3.0") {
    return`![Static Badge](https://img.shields.io/badge/License-OSL_3.0-lightblue.svg)`
  } else if (license === "PostgreSQL License") {
    return`![Static Badge](https://img.shields.io/badge/License-PostgreSQL-lightblue.svg)`
  } else if (license === "SIL Open Font License 1.1") {
    return`![Static Badge](https://img.shields.io/badge/License-OFL_1.1-lightblue.svg)`
  } else if (license === "University of Illinois/NCSA Open Source License") {
    return`![Static Badge](https://img.shields.io/badge/License-NCSA-lightblue.svg)`
  } else if (license === "The Unlicense") {
    return`![Static Badge](https://img.shields.io/badge/License-Unlicense-lightblue.svg)`
  } else if (license === "zLib License") {
    return`![Static Badge](https://img.shields.io/badge/License-Zlib-lightblue.svg)`
  } else if (license === "None") {
    return
  }
}

function renderLicenseLink(license) {
  if (license === "Academic Free License v3.0") {
    return `[https://opensource.org/license/afl-3-0-php](https://opensource.org/license/afl-3-0-php)`
  } else if (license === "Apache license 2.0") {
    return `[https://www.apache.org/licenses/LICENSE-2.0.txt](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  } else if (license === "Artistic license 2.0") {
    return `[https://opensource.org/license/artistic-2-0](https://opensource.org/license/artistic-2-0)`
  } else if (license === "Boost Software License 1.0") {
    return `[https://www.boost.org/LICENSE_1_0.txt]{https://www.boost.org/LICENSE_1_0.txt}`
  } else if (license === "BSD 2-clause Simplified license") {
    return `[https://opensource.org/license/bsd-2-clause](https://opensource.org/license/bsd-2-clause)`
  } else if (license === "BSD 3-clause New or Revised license") {
    return `[https://choosealicense.com/licenses/bsd-3-clause/](https://choosealicense.com/licenses/bsd-3-clause/)`
  } else if (license === "BSD 3-clause Clear license") {
    return `[https://spdx.org/licenses/BSD-3-Clause-Clear.html](https://spdx.org/licenses/BSD-3-Clause-Clear.html)`
  } else if (license === "BSD 4-clause Original or Old license") {
    return `[BSD 4-clause Original or Old license](BSD 4-clause Original or Old license)`
  } else if (license === "BSD Zero-Clause license") {
    return `[https://opensource.org/license/0bsd](https://opensource.org/license/0bsd)`
  } else if (license === "Creative Commons license family") {
    return `[https://creativecommons.org/share-your-work/cclicenses/](https://creativecommons.org/share-your-work/cclicenses/)`
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `[https://creativecommons.org/publicdomain/zero/1.0/deed.en](https://creativecommons.org/publicdomain/zero/1.0/deed.en)`
  } else if (license === "Creative Commons Attribution 4.0") {
    return `[https://creativecommons.org/licenses/by/4.0/deed.en](https://creativecommons.org/licenses/by/4.0/deed.en)`
  } else if (license === "Creative Commons Attribution ShareAlike 4.0") {
    return `[https://creativecommons.org/licenses/by-sa/4.0/deed.en](https://creativecommons.org/licenses/by-sa/4.0/deed.en)`
  } else if (license === "Do What The F*ck You Want To Public License") {
    return `[http://www.wtfpl.net/about/](http://www.wtfpl.net/about/)`
  } else if (license === "Educational Community License v2.0") {
    return `[https://opensource.org/license/ecl-2-0](https://opensource.org/license/ecl-2-0)`
  } else if (license === "Eclipse Public License 1.0") {
    return `[https://www.eclipse.org/org/documents/epl-v10.html](https://www.eclipse.org/org/documents/epl-v10.html)`
  } else if (license === "Eclipse Public License 2.0") {
    return `[https://www.eclipse.org/legal/epl-2.0/](https://www.eclipse.org/legal/epl-2.0/)`
  } else if (license === "European Union Public License 1.1") {
    return `[https://spdx.org/licenses/EUPL-1.1.html](https://spdx.org/licenses/EUPL-1.1.html)`
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[https://www.gnu.org/licenses/agpl-3.0.en.html#license-text](https://www.gnu.org/licenses/agpl-3.0.en.html#license-text)`
  } else if (license === "GNU General Public License family") {
    return `[https://www.gnu.org/licenses/quick-guide-gplv3.html](https://www.gnu.org/licenses/quick-guide-gplv3.html)`
  } else if (license === "GNU General Public License v2.0") {
    return `[https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html#SEC1](https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html#SEC1)`
  } else if (license === "GNU General Public License v3.0") {
    return `[https://www.gnu.org/licenses/quick-guide-gplv3.html](https://www.gnu.org/licenses/quick-guide-gplv3.html)`
  } else if (license === "GNU Lesser General Public License family") {
    return `[https://www.gnu.org/licenses/lgpl-3.0.html](https://www.gnu.org/licenses/lgpl-3.0.html)`
  } else if (license === "GNU Lesser General Public License v2.1") {
    return `[https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[https://www.gnu.org/licenses/lgpl-3.0.en.html](https://www.gnu.org/licenses/lgpl-3.0.en.html)`
  } else if (license === "ISC") {
    return `[https://opensource.org/license/isc-license-txt](https://opensource.org/license/isc-license-txt)`
  } else if (license === "LaTeX Project Public License v1.3c") {
    return `[https://spdx.org/licenses/LPPL-1.3c.html](https://spdx.org/licenses/LPPL-1.3c.html)`
  } else if (license === "Microsoft Public License") {
    return `[https://opensource.org/license/ms-pl-html](https://opensource.org/license/ms-pl-html)`
  } else if (license === "MIT") {
    return `[https://opensource.org/license/mit](https://opensource.org/license/mit)`
  } else if (license === "Mozilla Public License 2.0") {
    return `[https://www.mozilla.org/en-US/MPL/2.0/](https://www.mozilla.org/en-US/MPL/2.0/)`
  } else if (license === "Open Software License 3.0") {
    return `[https://opensource.org/license/osl-3-0-php](https://opensource.org/license/osl-3-0-php)`
  } else if (license === "PostgreSQL License") {
    return `[https://opensource.org/license/postgresql](https://opensource.org/license/postgresql)`
  } else if (license === "SIL Open Font License 1.1") {
    return `[https://openfontlicense.org/open-font-license-official-text/](https://openfontlicense.org/open-font-license-official-text/)`
  } else if (license === "University of Illinois/NCSA Open Source License") {
    return `[https://spdx.org/licenses/NCSA.html](https://spdx.org/licenses/NCSA.html)`
  } else if (license === "The Unlicense") {
    return `[https://choosealicense.com/licenses/unlicense/](https://choosealicense.com/licenses/unlicense/)`
  } else if (license === "zLib License") {
    return '[https://www.zlib.net/zlib_license.html](https://www.zlib.net/zlib_license.html)'
  } else if (license === "None") {
    return
  }
}

function renderLicenseSection(license) {
  return `
<p> This repo is under ${license} license.  Please see link below for more details. 
<br> 

${renderLicenseLink(license)}
  `
}

function generateMarkdown(response) {
  return `
# ${response.title}
<br>

${renderLicenseBadge(response.license)}

## Description:
<p> ${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation:
<p> ${response.installation}

## Usage:
<p> ${response.usage}

## License:
${renderLicenseSection(response.license)}

## Contributing:
<p> ${response.contributing}

## Test: 
<p> ${response.test}

## Questions:
<p> Feel free to reach out with any questions using the link below
<br>

[GitHub](https://github.com/${response.questionsGitHub})
<p> Or email at ${response.questionsEmail}`
};

module.exports = generateMarkdown;