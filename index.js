"use strict";
exports.__esModule = true;
exports.pandocMarkToMarkdown = exports.pandocMarkFromMarkdown = void 0;
var container_phrasing_1 = require("mdast-util-to-markdown/lib/util/container-phrasing");
var enterMark = function (token) {
};
var exitMark = function (token) {
};
var handleMark = function (node, _, context) {
    var exit = context.enter('emphasis');
    var value = (0, container_phrasing_1.containerPhrasing)(node, context, { before: '~', after: '~' });
    exit();
    return '~~' + value + '~~';
};
exports.pandocMarkFromMarkdown = {
    canContainEols: ['mark'],
    enter: { mark: enterMark },
    exit: { mark: exitMark }
};
exports.pandocMarkToMarkdown = {
    unsafe: [{ character: '~', inConstruct: 'phrasing' }],
    handlers: { "delete": handleMark }
};
