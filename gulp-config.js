module.exports = function () {
  var instanceRoot = "D:\\home\\site";
  var config = {
    websiteRoot: instanceRoot + "\\wwwroot",
    sitecoreLibraries: instanceRoot + "\\wwwroot\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
    runCleanBuilds: false
  };
  return config;
}
