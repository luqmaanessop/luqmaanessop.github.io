function nuke() {
  let nukeDiv = document.createElement("div");
  nukeDiv.setAttribute("id", "nukeBG");
  let mainContent = document.getElementById("content");

  // console.log(mainContent);

  nukeDiv.innerHTML += `
    <div id="fadeIt"></div>
    <div id="nuke"></div>
    <div id="terrain">
      <div id="LBground" class="ground"></div>

      <div id="LSground" class="ground"></div>

      <div id="RBground" class="ground"></div>

      <div id="RSground" class="ground"></div>

      <div id="lCloud" class="ground"></div>

      <div id="rCloud" class="ground"></div>

    </div>

    <div id="explosion">

      <div id="exCloud"></div>

      <div id="exFunnel"></div>

      <div id="exFunnel2"></div>

      <div id="exPlume"></div>

      <div id="exPlume2"></div>

      <div id="exPlume3"></div>

      <div id="exPlume4"></div>

      <div id="exRing2"></div>

      <div id="exRing"></div>

      <div id="exBase"></div>

      <div id="exFlash"></div>

    </div>`

  mainContent.prepend(nukeDiv);
}

export { nuke }
