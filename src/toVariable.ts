import * as vscode from 'vscode';
import * as removeVietnameseTones from './helper/removeVietnameseTones';
import * as camelCase from './helper/camelCase';

export const disposable = vscode.commands.registerCommand('to-variable', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor !== undefined) {
        const selection = editor.selection;
        if (selection && !selection.isEmpty) {
            const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
            const highlighted = editor.document.getText(selectionRange);
            console.log("highlighted", highlighted);

            editor.edit(editBuilder => {
                var name = removeVietnameseTones.removeVietnameseTones(highlighted);
                name = camelCase.camelCase(name);
                editBuilder.replace(selection, `${name} = "${highlighted}"`);
            });
        }
    }
});