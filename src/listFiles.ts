import * as vscode from 'vscode';
const fs = require('fs');

export const disposable = vscode.commands.registerCommand('list-files', () => {

    function createFile(fileName: String, content: string) {
        const wsedit = new vscode.WorkspaceEdit();
        if (vscode.workspace.workspaceFolders !== undefined) {
            const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
            const filePath = vscode.Uri.file(wsPath + `/${fileName}`);
            vscode.window.showInformationMessage(filePath.toString());
            wsedit.createFile(filePath, { ignoreIfExists: true });
            wsedit.insert(filePath, new vscode.Position(0, 0), content);
            vscode.workspace.applyEdit(wsedit);
            vscode.window.showInformationMessage(`Created a new file: ${fileName}`);
        }
    }

    const options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: 'Select',
        canSelectFiles: false,
        canSelectFolders: true
    };

    vscode.window.showOpenDialog(options).then(fileUri => {
        if (fileUri && fileUri[0]) {
            const folder = fileUri[0].fsPath;
            console.log('Selected file: ' + fileUri[0].fsPath);

            fs.readdir(folder, (err: String, files: Array<String>) => {
                var filesStr = "";
                files.forEach(file => {
                    filesStr += `${file}\n`;
                });

                createFile("name.txt", filesStr);
            });
        }
    });
});