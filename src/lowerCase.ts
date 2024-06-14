import * as vscode from 'vscode';

export const disposable = vscode.commands.registerCommand('lower-case', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor !== undefined) {
        const selection = editor.selection;
        if (selection && !selection.isEmpty) {
            const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
            const highlighted = editor.document.getText(selectionRange);
            console.log("highlighted", highlighted);

            editor.edit(editBuilder => {
                editBuilder.replace(selection, highlighted.toLocaleLowerCase());
            });
        }
    }
});