import { PhrasingContent, Parent } from "mdast";
import {
    Extension as FromMarkdownExtension,
    Handle as FromMarkdownHandle,
} from 'mdast-util-from-markdown';
import {
    Options as ToMarkdownExtension,
    Handle as ToMarkdownHandle,
} from 'mdast-util-to-markdown';
import { containerPhrasing } from "mdast-util-to-markdown/lib/util/container-phrasing";

declare module 'mdast' {
    interface StaticPhrasingContentMap {
        mark: Mark;
    }
}

export interface Mark extends Parent {
    type: 'mark';
    children: PhrasingContent[];
}

const enterMark: FromMarkdownHandle = function (token) {

}

const exitMark: FromMarkdownHandle = function (token) {

}

const handleMark: ToMarkdownHandle = function (node, _, context) {
    const exit = context.enter('emphasis')
    const value = containerPhrasing(node, context, { before: '~', after: '~' })
    exit()
    return '~~' + value + '~~'
}

export const pandocMarkFromMarkdown: FromMarkdownExtension = {
    canContainEols: ['mark'],
    enter: { mark: enterMark },
    exit: { mark: exitMark }
}

export const pandocMarkToMarkdown: ToMarkdownExtension = {
    unsafe: [{ character: '~', inConstruct: 'phrasing' }],
    handlers: { delete: handleMark }
}