/**
 * This function replaces the \n substring in a string with a <br/>
 * html tag
 */

export function newLineOnEnter(text: string) {
    return text.replaceAll('\\n', '<br/>');
}
