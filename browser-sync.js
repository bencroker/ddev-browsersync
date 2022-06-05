// #ddev-generated
let docroot = process.env.DDEV_DOCROOT;
let filesdir = process.env.DDEV_FILES_DIR;
let url = process.env.DDEV_HOSTNAME;

module.exports = {

    files: [docroot],
    ignore: ["node_modules", filesdir, "vendor"],
    open: false,
    ui: false,
    server: false,
    proxy: {
        target: "localhost"
    },
    host: url,
}
