import { containerPhrasing } from "mdast-util-to-markdown/lib/util/container-phrasing.js";
const enterMark = function (token) {
};
const exitMark = function (token) {
};
const handleMark = function (node, _, context) {
    const exit = context.enter('emphasis');
    const value = containerPhrasing(node, context, { before: '~', after: '~' });
    exit();
    return '~~' + value + '~~';
};
export const pandocMarkFromMarkdown = {
    canContainEols: ['mark'],
    enter: { mark: enterMark },
    exit: { mark: exitMark }
};
export const pandocMarkToMarkdown = {
    unsafe: [{ character: '~', inConstruct: 'phrasing' }],
    handlers: { delete: handleMark }
};
