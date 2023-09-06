const cd = document.getElementById("c");
const os = document.getElementById("os");
const brs = document.getElementById("brs");
const ts = document.getElementById("ts");
let button = document.getElementById("d");
let c = (5 * 60) * 1000;

const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    const browserRegex = {
        Opera: /(Opera|OPR)\//,
        Edge: /(Edge|Edg)\//,
        MSIE: /MSIE|Trident\//,
        Chrome: /Chrome\//,
        Safari: /Safari\//,
        Firefox: /Firefox\//,
    };

    let browser = Object.keys(browserRegex).find(name => browserRegex[name].test(userAgent)) || 'Unknown';

    const osRegex = {
        'Windows 10/11': /(Windows NT 10\.0)/,
        'Windows 8.1': /(Windows NT 6\.3)/,
        'Windows 8': /(Windows NT 6\.2)/,
        'Windows 7': /(Windows NT 6\.1)/,
        'Windows Vista': /(Windows NT 6\.0)/,
        'Windows Server 2003': /(Windows NT 5\.2)/,
        'Windows XP': /(Windows NT 5\.1|Windows XP)/,
        'Windows 2000': /(Windows NT 5\.0|Windows 2000)/,
        'Windows ME': /(Win 9x 4\.90|Windows ME)/,
        'Windows 98': /(Windows 98|Win98)/,
        'Windows 95': /(Windows 95|Win95|Windows_95)/,
        'Windows NT 4.0': /(Windows NT 4\.0|WinNT4\.0|WinNT|Windows NT)/,
        'Windows CE': /Windows CE/,
        'Windows 3.11': /Win16/,
        Android: /Android/,
        'Open BSD': /OpenBSD/,
        'Sun OS': /SunOS/,
        'Chrome OS': /CrOS/,
        Linux: /(Linux|X11(?!.*CrOS))/,
        iOS: /(iPhone|iPad|iPod)/,
        'Mac OS X': /Mac OS X/,
        'Mac OS': /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
        QNX: /QNX/,
        UNIX: /UNIX/,
        BeOS: /BeOS/,
        'OS/2': /OS\/2/,
    };

    let os = Object.keys(osRegex).find(name => osRegex[name].test(userAgent)) || 'Unknown';

    const browserVersion = parseFloat((userAgent.match(/(?:Opera|OPR|Edge|Edg|MSIE|Chrome|Safari|Firefox)[\s/](\d+(\.\d+)?)/i) || [])[1]);

    return { browser, browserVersion, os };
}

const jscd = getBrowserInfo();

function cFunc() {
  let min = Math.floor(c / (60 * 1000));
  let s = Math.floor((c % (60 * 1000)) / 1000);

  min = min.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");

  cd.innerText = (`${min}分${s}秒`);

  if (c <= 0) {
    location.href = "https://www.amazon.co.jp/s?rh=n%3A170625011";
  } else {
    c -= 1000;
  }
}

setInterval(cFunc, 1000);

function dc() {
    location.href = "https://www.amazon.co.jp/s?rh=n%3A170625011";
}

button.addEventListener("click", dc);

os.innerText = (`${jscd.os}\n`);
brs.innerText = (`${jscd.browser} ${jscd.browserVersion}`);
ts.innerText = new Date().toLocaleString();