function Links() {
  //Clé du dossier source
  var folderId = "0B2AfsJGT0qmPNWY2MjU0ZDEtMWY3OC00NzlmLWFkMTUtYTQ1YzkwODMzNDg0";
  var files = DriveApp.getFolderById(folderId).getFiles();
  while (files.hasNext()) {
      var file = files.next();
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      var data = {
        file_name: file.getName(),
        url: "http://drive.google.com/uc?export=view&id=" + file.getId(),
      };
    EnvoiDonnees(data);
  };
}

function EnvoiDonnees(data){
  // Lien vers le spreadsheet
  var ss=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1XENfQz3nyTmr1YsBYTGytkwrvFZ8vAnAJr0VfppZAGI/edit#gid=0");
  var sheet = ss.getSheetByName("Import");
  sheet.appendRow([data.file_name, data.url]);
  return 'Success!';
}