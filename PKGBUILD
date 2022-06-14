# Maintainer: DarkXero <info@techxero.com>
pkgname=kde-rice
_destname1="/etc"
pkgver=22.06
pkgrel=1
pkgdesc="Desktop Config for XeroLinux"
arch=('any')
url="https://github.com/xerolinux"
license=('GPL3')
makedepends=('git')
replaces=('xerolinux-rice')
conflicts=()
provides=("${pkgname}")
options=(!strip !emptydirs)
source=(${pkgname}::"git+${url}/${pkgname}")
sha256sums=('SKIP')
package() {
	install -dm755 ${pkgdir}${_destname1}
	cp -r ${srcdir}/${pkgname}${_destname1}/* ${pkgdir}${_destname1}
	rm ${srcdir}/${pkgname}/creds.sh
	rm ${srcdir}/${pkgname}/push.sh
	rm ${srcdir}/${pkgname}/README.md
	rm ${srcdir}/${pkgname}/PKGBUILD
}
