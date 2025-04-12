

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["555076a0-d81a-463d-86e3-4efcff8e0930","433116d3-75ac-4adc-911c-9bfc70e149a1","6313f961-baf3-4346-8dff-aa883d723c15","30211660-2994-4339-822b-2382734217fc","d6dc41f4-e465-4cfd-85c2-8db10031b47e","08a8923f-f217-42fe-948d-4ae7fcc7d19c","04bff5ef-f009-438e-af02-e41e24197903","dfe32c47-29cc-4a8b-a63a-6804e6ded6d1","00657bbf-cdce-42bf-8c15-bb8d3ee6c084","c7c6f783-27c7-42db-a4d2-ec32985f16ef","09455541-e4cb-4557-a931-595e1697665e","1072841b-f0f1-44fc-b176-1b3559f877ad","c88042eb-dbb9-4ad3-a14b-fb203539376a","ee8f4b2a-363b-42ee-bf2f-616a030da760","9b3e95d7-c557-4dc3-aa12-e3e1185c590c","865b2b65-4ee7-4d2d-8ac5-113df724123e","101747e0-8b77-4ba5-b0ea-3fe4a2c8909b","bf963909-ac7f-4b5e-9c6f-f9c0d62c2f6b","1f5959a9-c1d2-45a5-b2dc-342ef11f1c88","55f307c8-66b0-4207-bae2-a6ddf5f0c84f","741a3111-5cc9-4614-98af-8ff0f1413de2","1fe20067-1a27-408d-b0fe-d160898c7259","771a48e9-83b6-4aa3-9a06-78e3188e09e7","9e1a5abb-b5d1-42ed-8567-940cb950a3e6","6ef15bea-028a-4ca1-bf5b-33b515391a83","dbb45fd6-ca15-41ce-8be3-b035734909d4","d8ab2114-2849-407d-98c5-4bfbaab3f1f5","54e77dea-e046-4e9b-9d11-32592d0f6b91","9ee699a6-e5a4-49ee-8426-290a1be41e6e","fad0f1d7-306e-4fa1-afcc-25c6ef9af1bf","c6d20474-01fb-48a6-9dc7-a4e4e4dcef3e"],"propsByKey":{"555076a0-d81a-463d-86e3-4efcff8e0930":{"name":"LoganPaul-ezgif.com-resize.png_1","sourceUrl":null,"frameSize":{"x":222,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZblM_4kKQjbkCp5Bt1CFtcKW3DAKuQMf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":224},"rootRelativePath":"assets/555076a0-d81a-463d-86e3-4efcff8e0930.png"},"433116d3-75ac-4adc-911c-9bfc70e149a1":{"name":"Mr-Beast-with-Money.png_1","sourceUrl":null,"frameSize":{"x":196,"y":212},"frameCount":1,"looping":true,"frameDelay":12,"version":"GSK2XQAVlECk83G0QBHIlvov4CTA30pE","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":212},"rootRelativePath":"assets/433116d3-75ac-4adc-911c-9bfc70e149a1.png"},"6313f961-baf3-4346-8dff-aa883d723c15":{"name":"Ksi Css.png_2","sourceUrl":null,"frameSize":{"x":256,"y":275},"frameCount":1,"looping":true,"frameDelay":12,"version":"9HqGonppG_UNfrBQhheHOlLTSg_eq9uN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":275},"rootRelativePath":"assets/6313f961-baf3-4346-8dff-aa883d723c15.png"},"30211660-2994-4339-822b-2382734217fc":{"name":"Ksi","sourceUrl":null,"frameSize":{"x":198,"y":401},"frameCount":13,"looping":true,"frameDelay":3,"version":"9wumBGedsDCEVpnDEl39Q_V1kka7qBhD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":990,"y":1203},"rootRelativePath":"assets/30211660-2994-4339-822b-2382734217fc.png"},"d6dc41f4-e465-4cfd-85c2-8db10031b47e":{"name":"Ksi Fast","sourceUrl":null,"frameSize":{"x":198,"y":401},"frameCount":13,"looping":true,"frameDelay":2,"version":"nkORb_GWR574.ddE9EQnnOJOuX6ES7OR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":990,"y":1203},"rootRelativePath":"assets/d6dc41f4-e465-4cfd-85c2-8db10031b47e.png"},"08a8923f-f217-42fe-948d-4ae7fcc7d19c":{"name":"Ksi Fastest","sourceUrl":null,"frameSize":{"x":198,"y":401},"frameCount":13,"looping":true,"frameDelay":1,"version":"JPFaHpsEofgNPvVjbZHBSpbbB3uu7H27","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":990,"y":1203},"rootRelativePath":"assets/08a8923f-f217-42fe-948d-4ae7fcc7d19c.png"},"04bff5ef-f009-438e-af02-e41e24197903":{"name":"Ksi Floor.jpg_1","sourceUrl":null,"frameSize":{"x":347,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"_ATGA3LnhOTtWUCSZz.A_D_CEmNQn3sh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":260},"rootRelativePath":"assets/04bff5ef-f009-438e-af02-e41e24197903.png"},"dfe32c47-29cc-4a8b-a63a-6804e6ded6d1":{"name":"Lgn Floor","sourceUrl":null,"frameSize":{"x":347,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"q_8rn51zAkRgP30rTBPr5GR.T0pSljyl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":260},"rootRelativePath":"assets/dfe32c47-29cc-4a8b-a63a-6804e6ded6d1.png"},"00657bbf-cdce-42bf-8c15-bb8d3ee6c084":{"name":"Prime Ice Pop F.png_1","sourceUrl":null,"frameSize":{"x":147,"y":416},"frameCount":1,"looping":true,"frameDelay":12,"version":"8SbYYAXKZGEYK0UgobcE6lZO3FIqgNsX","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":147,"y":416},"rootRelativePath":"assets/00657bbf-cdce-42bf-8c15-bb8d3ee6c084.png"},"c7c6f783-27c7-42db-a4d2-ec32985f16ef":{"name":"Prime Blue F.png_1","sourceUrl":null,"frameSize":{"x":158,"y":444},"frameCount":1,"looping":true,"frameDelay":12,"version":"poLI0PnU1oRM8JECgky4PakSqwILB8vt","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":158,"y":444},"rootRelativePath":"assets/c7c6f783-27c7-42db-a4d2-ec32985f16ef.png"},"09455541-e4cb-4557-a931-595e1697665e":{"name":"Lunchables.png_1","sourceUrl":null,"frameSize":{"x":226,"y":232},"frameCount":1,"looping":true,"frameDelay":12,"version":"NluIsaefFdwRSKaqTH.CPzQgYGgfiAnP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":232},"rootRelativePath":"assets/09455541-e4cb-4557-a931-595e1697665e.png"},"1072841b-f0f1-44fc-b176-1b3559f877ad":{"name":"lunchly.png_1","sourceUrl":null,"frameSize":{"x":197,"y":235},"frameCount":1,"looping":true,"frameDelay":12,"version":"unQcaiwGx5XB9Tuc1nCYdbKYE9sNWNXY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":197,"y":235},"rootRelativePath":"assets/1072841b-f0f1-44fc-b176-1b3559f877ad.png"},"c88042eb-dbb9-4ad3-a14b-fb203539376a":{"name":"Golden Prime FF.png_1","sourceUrl":null,"frameSize":{"x":105,"y":306},"frameCount":1,"looping":true,"frameDelay":12,"version":"IAKkEttR7SyGKOoVOdIZDVwdwm4eJ87l","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":105,"y":306},"rootRelativePath":"assets/c88042eb-dbb9-4ad3-a14b-fb203539376a.png"},"ee8f4b2a-363b-42ee-bf2f-616a030da760":{"name":"Lgn","sourceUrl":null,"frameSize":{"x":136,"y":272},"frameCount":9,"looping":true,"frameDelay":3,"version":"VttdXicvaBWTyhy0Y4vTdyPyguKfdLMn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":816},"rootRelativePath":"assets/ee8f4b2a-363b-42ee-bf2f-616a030da760.png"},"9b3e95d7-c557-4dc3-aa12-e3e1185c590c":{"name":"Lgn Fast","sourceUrl":null,"frameSize":{"x":136,"y":272},"frameCount":9,"looping":true,"frameDelay":2,"version":"g7qBa17KpL23cHtt9TdUZNZRM5DTXF7A","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":816},"rootRelativePath":"assets/9b3e95d7-c557-4dc3-aa12-e3e1185c590c.png"},"865b2b65-4ee7-4d2d-8ac5-113df724123e":{"name":"Lgn Fastest","sourceUrl":null,"frameSize":{"x":136,"y":272},"frameCount":9,"looping":true,"frameDelay":1,"version":"wyK_g8UeWphYBT_gY173lhtPf_UNe6LB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":816},"rootRelativePath":"assets/865b2b65-4ee7-4d2d-8ac5-113df724123e.png"},"101747e0-8b77-4ba5-b0ea-3fe4a2c8909b":{"name":"WASDD.png_1","sourceUrl":null,"frameSize":{"x":82,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"_IxKGjzZDL6vTICdCi3G7TGMWDtfbzWO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":35},"rootRelativePath":"assets/101747e0-8b77-4ba5-b0ea-3fe4a2c8909b.png"},"bf963909-ac7f-4b5e-9c6f-f9c0d62c2f6b":{"name":"Left/Right","sourceUrl":null,"frameSize":{"x":82,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"0KFyt_6O3H8axhq3tSZAwNaEGOZp2.U9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":35},"rootRelativePath":"assets/bf963909-ac7f-4b5e-9c6f-f9c0d62c2f6b.png"},"1f5959a9-c1d2-45a5-b2dc-342ef11f1c88":{"name":"SpaceBar.png_1","sourceUrl":"assets/v3/animations/UaOzqSHxBYJZxS4vMiuECBzkKfX6jr6NEmGeYegpLFM/1f5959a9-c1d2-45a5-b2dc-342ef11f1c88.png","frameSize":{"x":249,"y":47},"frameCount":1,"looping":true,"frameDelay":4,"version":"q3lfETRY45iVzaE3dWHhN59FIOAUw5er","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":47},"rootRelativePath":"assets/v3/animations/UaOzqSHxBYJZxS4vMiuECBzkKfX6jr6NEmGeYegpLFM/1f5959a9-c1d2-45a5-b2dc-342ef11f1c88.png"},"55f307c8-66b0-4207-bae2-a6ddf5f0c84f":{"name":"lunchly2.png_1","sourceUrl":null,"frameSize":{"x":200,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"IuqF57IG3cvbZGkzM0zYYxjnOsW9mRQi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":237},"rootRelativePath":"assets/55f307c8-66b0-4207-bae2-a6ddf5f0c84f.png"},"741a3111-5cc9-4614-98af-8ff0f1413de2":{"name":"lunchly 3.png_1","sourceUrl":null,"frameSize":{"x":200,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"gErkoLPC_BJbdyXr7pS9JN93M9CN84y3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":237},"rootRelativePath":"assets/741a3111-5cc9-4614-98af-8ff0f1413de2.png"},"1fe20067-1a27-408d-b0fe-d160898c7259":{"name":"tree-ezgif.com-resize.png_1","sourceUrl":"assets/v3/animations/UaOzqSHxBYJZxS4vMiuECBzkKfX6jr6NEmGeYegpLFM/1fe20067-1a27-408d-b0fe-d160898c7259.png","frameSize":{"x":400,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"w8KPKoE018_ebX6sK.sjYYxznA9MmRNu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":200},"rootRelativePath":"assets/v3/animations/UaOzqSHxBYJZxS4vMiuECBzkKfX6jr6NEmGeYegpLFM/1fe20067-1a27-408d-b0fe-d160898c7259.png"},"771a48e9-83b6-4aa3-9a06-78e3188e09e7":{"name":"1-ezgif.com-gif-maker.png_1","sourceUrl":null,"frameSize":{"x":275,"y":547},"frameCount":13,"looping":true,"frameDelay":3,"version":"zb8.smAK6QnUGdTeu.JHHokg80CUkpH0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1375,"y":1641},"rootRelativePath":"assets/771a48e9-83b6-4aa3-9a06-78e3188e09e7.png"},"9e1a5abb-b5d1-42ed-8567-940cb950a3e6":{"name":"mrb Fast","sourceUrl":null,"frameSize":{"x":275,"y":547},"frameCount":13,"looping":true,"frameDelay":2,"version":"VsmRIeY3xENrg4iRfhoKWOb2JPjKnLLy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1375,"y":1641},"rootRelativePath":"assets/9e1a5abb-b5d1-42ed-8567-940cb950a3e6.png"},"6ef15bea-028a-4ca1-bf5b-33b515391a83":{"name":"Mrb Fastest","sourceUrl":null,"frameSize":{"x":275,"y":547},"frameCount":13,"looping":true,"frameDelay":1,"version":"io2OzLQc2TZq9r2UIDWyuFTndLCrfUGu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1375,"y":1641},"rootRelativePath":"assets/6ef15bea-028a-4ca1-bf5b-33b515391a83.png"},"dbb45fd6-ca15-41ce-8be3-b035734909d4":{"name":"Hersheys","sourceUrl":null,"frameSize":{"x":402,"y":148},"frameCount":1,"looping":true,"frameDelay":12,"version":"NR6_ICBq8BO.GD7jJzo6cFyTGox0muof","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":402,"y":148},"rootRelativePath":"assets/dbb45fd6-ca15-41ce-8be3-b035734909d4.png"},"d8ab2114-2849-407d-98c5-4bfbaab3f1f5":{"name":"feastables","sourceUrl":null,"frameSize":{"x":340,"y":144},"frameCount":1,"looping":true,"frameDelay":12,"version":"ijn6f1hvYyq6IpJO5xpdsWPeHeq.HT0E","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":144},"rootRelativePath":"assets/d8ab2114-2849-407d-98c5-4bfbaab3f1f5.png"},"54e77dea-e046-4e9b-9d11-32592d0f6b91":{"name":"feast2","sourceUrl":null,"frameSize":{"x":348,"y":149},"frameCount":1,"looping":true,"frameDelay":12,"version":"5wqi2tvX0grokyvGlGCJA2fcXlk27c69","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":348,"y":149},"rootRelativePath":"assets/54e77dea-e046-4e9b-9d11-32592d0f6b91.png"},"9ee699a6-e5a4-49ee-8426-290a1be41e6e":{"name":"feast3","sourceUrl":null,"frameSize":{"x":278,"y":135},"frameCount":1,"looping":true,"frameDelay":12,"version":"7nJ_gXfFJMHhdtZpt5x98w9OZ7ct088q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":135},"rootRelativePath":"assets/9ee699a6-e5a4-49ee-8426-290a1be41e6e.png"},"fad0f1d7-306e-4fa1-afcc-25c6ef9af1bf":{"name":"PrimeLemon","sourceUrl":null,"frameSize":{"x":148,"y":403},"frameCount":1,"looping":true,"frameDelay":12,"version":"l0dmQ2JjVgUsBCjl1XAcv0PY6fXG6TRh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":403},"rootRelativePath":"assets/fad0f1d7-306e-4fa1-afcc-25c6ef9af1bf.png"},"c6d20474-01fb-48a6-9dc7-a4e4e4dcef3e":{"name":"PrimePink","sourceUrl":null,"frameSize":{"x":148,"y":404},"frameCount":1,"looping":true,"frameDelay":12,"version":"UuuFlyDVxbPco_tJkdUiR.GY_LD807jD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":404},"rootRelativePath":"assets/c6d20474-01fb-48a6-9dc7-a4e4e4dcef3e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Functions
//Menu 
function StartScreen() {
  background("black");
  noStroke();
  fill("red");
  rect(-1, 290, 600, 25);
  rect(60, 0, 70, 600);
  fill("white");
  textFont("Pritchard");
  textSize(20);
  text("Press Enter", 270, 308);
  if (keyWentDown("enter")) {
    playSound("assets/se_system_fixed_l.mp3", false);
    CurrentScreen = "PlayScreen";
  }
  if (keyWentDown("space")) {
    playSound("assets/se_system_fixed_l.mp3", false);
    CurrentScreen = "PlayScreen";
  }
}
function PlayScreen() {
  if (!CssThemePlaying) {
    playSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3", true);
    CssThemePlaying = true;
  }
  background("black");
  fill("white");
  textFont("Pritchard");
  textSize(30);
  text("PLAY", 50, 110);
  text("CONTROLS", 50, 160);
  text("HOW TO PLAY", 50, 210);
  noFill();
  stroke("white");
  rect(40, 85, 95, 30);
  rect(40, 135, 175, 30);
  rect(40, 185, 220, 30);
  if (mousePressedOver(Play)) {
    CurrentScreen = "Css";
    playSound("assets/se_system_fixed_s.mp3", false);
  }
  if (mousePressedOver(Controls)) {
    CurrentScreen = "Controls";
    playSound("assets/se_system_fixed_s.mp3", false);
  }
  if (mousePressedOver(HowToPlay)) {
    CurrentScreen = "HowToPlay";
    playSound("assets/se_system_fixed_s.mp3", false);
  }
}
function ControlsScreen() {
  WASD.visible = true;
  LR.scale = true;
  SpaceBar.visible = true;
  background("black");
  fill("white");
  textFont("Pritchard");
  textSize(30);
  text("/", 110, 95);
  text("= Movement", 220, 95);
  text("= Jump", 180, 155);
  text("Back", 310, 375);
  noFill();
  stroke("white");
  rect(300, 350, 81, 30);
  if (mousePressedOver(BackBtn)) {
    CurrentScreen = "PlayScreen";
    playSound("assets/se_system_cancel.mp3", false);
    WASD.visible = false;
LR.scale = false;
SpaceBar.visible = false;
  }
}
function HowToPlayScreen() {
  background("black");
  fill("white");
  textFont("Pritchard");
  textSize(30);
  text("Ksi", 65, 40);
  text("Logan Paul", 25, 155);
  text("MrBeast", 35, 280);
  text("Back", 310, 375);
  textSize(18);
  text("Collect the Prime bottles and", 180, 60);
  text("avoid the Lunchables", 210, 80);
  text("Collect the Lunchly boxes", 180, 180);
  text("and avoid the Lunchables", 200, 200);
  text("Collect the Feastables and", 180, 300);
  text("avoid the Hershey's", 210, 320);
  noFill();
  stroke("white");
  rect(300, 350, 81, 30);
  KsiHTP.visible = true;
  LgnHTP.visible = true;
  MrbHTP.visible = true;
  if (mousePressedOver(BackBtn)) {
    CurrentScreen = "PlayScreen";
    playSound("assets/se_system_cancel.mp3", false);
    KsiHTP.visible = false;
    LgnHTP.visible = false;
    MrbHTP.visible = false;
  }
}
function CssScreen() {
  background("black");
  stroke("White");
  noFill();
  rect(10, 150, 120, 120);
  rect(140, 150, 120, 120);
  rect(270, 150, 120, 120);
  rect(300, 350, 81, 30);
  fill("white");
  textSize(22);
  noStroke();
  fill("white");
  textFont("Pritchard");
  text("Choose Your Character", 100, 65);
  textSize(16);
  text("KSI", 55, 140);
  text("Logan Paul", 165, 140);
  text("MrBeast", 305, 140);
  textSize(30);
  text("Back", 310, 375);
  KsiCss.visible = true;
  LgnPaulCss.visible = true;
  MrBeastCss.visible = true;
  if (mousePressedOver(BackBtn)) {
    CurrentScreen = "PlayScreen";
    playSound("assets/se_system_cancel.mp3", false);
    KsiCss.visible = false;
    LgnPaulCss.visible = false;
    MrBeastCss.visible = false;
  }
  if (mousePressedOver(KsiCss)) {
    playSound("assets/se_system_fixed_s.mp3", false);
    CurrentScreen = "KsiGame";
    PlrKsi = true;
  }
  if (mousePressedOver(LgnPaulCss)) {
    stopSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3");
    playSound("assets/se_system_fixed_s.mp3", false);
    CurrentScreen = "LgnGame";
    PlrLgn = true;
  }
  if (mousePressedOver(MrBeastCss)) {
    CurrentScreen = "MrBGame";
    MrBeast = true;
    PlrMrb = true;
    stopSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3");
    playSound("assets/se_system_fixed_s.mp3", false);
  }
}
function checkMouseHover() {
  if (mouseIsOver(KsiCss)) {
    popupText = "Difficulty: Hard";
    popupColor = "red"; 
    popupX = KsiCss.x - popupWidth / 2;
    popupY = KsiCss.y - KsiCss.height / 2 - popupHeight - 5;
    popupVisible = true;
  } else if ((mouseIsOver(LgnPaulCss))) {
    popupText = "Difficulty: Medium";
    popupColor = "yellow"; 
    popupX = LgnPaulCss.x - popupWidth / 2; 
    popupY = LgnPaulCss.y - LgnPaulCss.height / 2 - popupHeight - 5; 
    popupVisible = true;
  } else if ((mouseIsOver(MrBeastCss))) {
    popupText = "Difficulty: Easy";
    popupColor = "green"; // Color for easy
    popupX = MrBeastCss.x - popupWidth / 2;
    popupY = MrBeastCss.y - MrBeastCss.height / 2 - popupHeight - 5;
    popupVisible = true;
  } else {
    popupVisible = false; 
  }
}
function updatePopupPosition() {
  if (popupVisible) {
    popupX = Math.min(mouseX - 50, 400 - popupWidth - 25); 
    popupY = Math.min(mouseY + 15, 400 - popupHeight - 25); 
    popupX = Math.max(popupX, 25);
    popupY = Math.max(popupY, 45);
  }
}
function drawPopup() {
  if (popupVisible) {
    popupX = Math.max(25, Math.min(popupX, 400 - popupWidth - 25)); 
    fill(popupColor);
    rect(popupX, popupY, popupWidth, popupHeight);
    fill("black");
    textFont("Pritchard");
    textAlign(CENTER, CENTER);
    textSize(14);
    text(popupText, popupX + popupWidth / 2, popupY + popupHeight / 2);
  }
}
//Game Starters

function SpawnPrimeandLunchable() {
  if (!PrimeGold.visible && Math.random() < 0.001) {
    PrimeGold.x = 450;
    PrimeGold.y = randomNumber(20, 200);
    PrimeGold.visible = true;
  }
  if (!PrimeBlue.visible && !PrimeIce.visible && !PrimeLemon.visible && !PrimePink.visible) {
    var PrimeYPos = randomNumber(50, 250);
    var PrimeType = ([PrimeBlue, PrimeIce, PrimeLemon, PrimePink])[(Math.floor(Math.random()*4))];
    PrimeType.x = randomNumber(450, 475);
    PrimeType.y = PrimeYPos;
    PrimeType.visible = true;
  }
  
  if (!Lunchables.visible) {
    var LunchableYPos;
    do {
      LunchableYPos = randomNumber(100, 300); 
    } while (Math.abs(LunchableYPos - PrimeIce.y) < 30 || Math.abs(LunchableYPos - PrimeBlue.y) < 30 || Math.abs(LunchableYPos - PrimeGold.y) < 30 || Math.abs(LunchableYPos - PrimeLemon.y) < 30 || Math.abs(LunchableYPos - PrimePink.y) < 30);
    if (LunchableYPos <145 || LunchableYPos > 200  ) {
      Lunchables.x = randomNumber(450, 475);
      Lunchables.y = LunchableYPos;
      Lunchables.visible = true;
    }
  }
}
function SpawnLunchlyandLunchable() {
  if (!PrimeGold.visible && Math.random() < 0.001) {
    PrimeGold.x = 450;
    PrimeGold.y = randomNumber(120, 200);
    PrimeGold.visible = true;
  }
  if (!Lunchly1.visible && !Lunchly2.visible && !Lunchly3.visible) {
    var LunchlyYPos = randomNumber(50, 250);
    var LunchlyType = ([Lunchly1, Lunchly2, Lunchly3])[Math.floor(Math.random()*3)];
    LunchlyType.x = randomNumber(450, 475);
    LunchlyType.y = LunchlyYPos;
    LunchlyType.visible = true;
  }
  
  if (!Lunchables.visible) {
    var LunchableYPos;
    do {
      LunchableYPos = randomNumber(100, 300); 
    } while (Math.abs(LunchableYPos - Lunchly1.y) < 50 || Math.abs(LunchableYPos - Lunchly2.y) < 50 || Math.abs(LunchableYPos - Lunchly3.y) < 50);
    if (LunchableYPos <145 || LunchableYPos > 230  ) {
      Lunchables.x = randomNumber(450, 475);
      Lunchables.y = LunchableYPos;
      Lunchables.visible = true;
    }
  }
}
function SpawnFeastandHersh() {
  if (!PrimeGold.visible && Math.random() < 0.001) {
    PrimeGold.x = 450;
    PrimeGold.y = randomNumber(85, 200);
    PrimeGold.visible = true;
  }
  if (!feast.visible && !feast2.visible && !feast3.visible) {
    var FeastYPos = randomNumber(60, 250);
    var FeastType = ([feast, feast2, feast3])[Math.floor(Math.random()*3)];
    FeastType.x = randomNumber(450, 475);
    FeastType.y = FeastYPos;
    FeastType.visible = true;
  }
  
  if (!hersh.visible) {
      var hershYPos;
      var maxAttempts = 10;
      var attempts = 0;

      do {
        hershYPos = randomNumber(100, 300);
        attempts += 1;
        console.log(attempts);
      } while (
        attempts < maxAttempts && (Math.abs(hershYPos - feast.y) < 40 ||  Math.abs(hershYPos - feast2.y) < 40 || Math.abs(hershYPos - feast3.y) < 40 || (hershYPos >= 145 && hershYPos <= 230)) );

      if (attempts < maxAttempts) {
        hersh.x = randomNumber(450, 475);
        hersh.y = hershYPos;
        hersh.visible = true;
      }
    }
}
function dmg() {
  if (dmg) {
    if (PlrKsi) {
      Ksi.tint = "red";
      if (!DmgSnd) {
        playSound("assets/ksi-laugh-made-with-Voicemod--AudioTrimmer.com-.mp3", false);
        DmgSnd = false;
      }
    }
    if (PlrLgn) {
      LgnPaul.tint = "red";
      if (!DmgSnd) {
        playSound("assets/I-like-my-cheese-drippy-bruh-earrape--AudioTrimmer.com-.mp3", false);
        DmgSnd = false;
      }
    }
    if (PlrMrb) {
      MrB.tint = "red";
      if (!DmgSnd) {
        playSound("assets/mr-beast-screaming-meme-made-with-Voicemod.mp3", false);
        DmgSnd = false;
      }
    }
    setTimeout(function() {
      Ksi.tint = "null";
      LgnPaul.tint = "null";
      MrB.tint = "null";
      Dmg = false;
    },200);
  }
}
//Ksi Character Game
function KsiGame() {
  if (!KsiSongPlaying) {
    playSound("assets/KSI---Thick-Of-It-ft.-Trippie-Redd.mp3", true);
    KsiSongPlaying = true;
  }
  if (Lives == 0) {
    gameover = true;
    gameoversound = true;
  }
  stopSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3");
  background("skyblue");
  fill("white");
  text("Score:", 100, 30);
  text(Score, 145, 30);
  text("Lives:", 30, 30);
  text(Lives, 70, 30);
  if (Score >= 30) {
    floor1.x -= 10;
    floor2.x -= 10;
    floor3.x -= 10;
  } else {
    if (Score >= 10) {
      floor1.x -= 6;
      floor2.x -= 6;
      floor3.x -= 6;
    } else {
      floor1.x -= 2; 
      floor2.x -= 2;
      floor3.x -= 2;
    }
  }
  
  if (PrimeGold.visible) {
    if (Score >= 30) {
    PrimeGold.x -= 45;
  } else if (Score >= 10) {
    PrimeGold.x -= 40;
  } else {
    PrimeGold.x -= 30;
  }
  if (PrimeGold.x < 0) {
    PrimeGold.visible = false;
  }
  }
  if (PrimeBlue.visible) {
    if (Score >= 30) {
      PrimeBlue.x -= 10;
    } else {
      if (Score >= 10) {
        PrimeBlue.x -= 6;
      } else {
        PrimeBlue.x -= 2;
      }
    }
    if (PrimeBlue.x < 0) {
      PrimeBlue.visible = false;
    }
  }
  if (PrimeIce.visible) {
      if (Score >= 30) {
        PrimeIce.x -= 10;
      } else {
        if (Score >= 10) {
          PrimeIce.x -= 6;
        } else {
          PrimeIce.x -= 2;
        }
      }
    if (PrimeIce.x < 0){
      PrimeIce.visible = false;
    }
  }
  if (PrimePink.visible) {
      if (Score >= 30) {
        PrimePink.x -= 10;
      } else {
        if (Score >= 10) {
          PrimePink.x -= 6;
        } else {
          PrimePink.x -= 2;
        }
      }
      if (PrimePink.x < 0){
      PrimePink.visible = false;
      }
  }
  if (PrimeLemon.visible) {
      if (Score >= 30) {
        PrimeLemon.x -= 10;
      } else {
        if (Score >= 10) {
          PrimeLemon.x -= 6;
        } else {
          PrimeLemon.x -= 2;
        }
      }
      if (PrimeLemon.x < 0){
      PrimeLemon.visible = false;
      }
  }
  if (Lunchables.visible) {
      if (Score >= 30) {
        Lunchables.x -= 10;
      } else {
        if (Score >= 10) {
          Lunchables.x -= 6;
        } else {
          Lunchables.x -= 2;
        }
      }
      if (Lunchables.x < 0){
      Lunchables.visible = false;
      }
  }
  if (Ksi.isTouching(PrimeGold) && PrimeGold.visible) {
    Score += 100; 
    PrimeGold.visible = false;
  }
  if (Ksi.isTouching(PrimeBlue) && PrimeBlue.visible) {
    Score += 1;
    PrimeBlue.visible = false;
  }
  if (Ksi.isTouching(PrimeIce) && PrimeIce.visible){
    Score += 1;
    PrimeIce.visible = false;
  }
  if (Ksi.isTouching(PrimePink) && PrimePink.visible){
    Score += 1;
    PrimePink.visible = false;
  }
  if (Ksi.isTouching(PrimeLemon) && PrimeLemon.visible){
    Score += 1;
    PrimeLemon.visible = false;
  }
  if (Ksi.isTouching(Lunchables) && Lunchables.visible){
    Lives -= 1;
    Dmg = true;
    Lunchables.visible = false;
    dmg();
  }
  if (Math.random()< 0.05){
    SpawnPrimeandLunchable();
  }
  if (floor1.x < -156) { 
    floor1.x = floor2.x + floor2.width;
  }
  if (floor2.x < -156) {
    floor2.x = floor1.x + floor1.width;
  }
  KsiCss.visible = false;
  LgnPaulCss.visible = false;
  MrBeastCss.visible = false;
  floor1.visible = true;
  floor2.visible = true;
  floor3.visible = true;
  Ksi.visible = true;
  gravity = 0.3;
  
  if (keyDown("a")) {
    Ksi.x -= 3;
  } else if (keyDown("d")) {
    Ksi.x += 3;
  }
  if (keyDown("left")) {
  Ksi.x -= 3;
} else if (keyDown("right")) {
  Ksi.x += 3;
}
  
  if (keyWentDown("space") && !isJumping) {
    playSound("assets/JUMP-02---AUDIO-FROM-JAYUZUMI.COM.mp3", false);
    yVelocity = jumpspeed;
    isJumping = true;
  }
  if (isJumping) {
    yVelocity += gravity;
    Ksi.y += yVelocity;
  }
  if (Ksi.y >= 250) {
    Ksi.y = 250;
    isJumping = false;
    yVelocity = 0;
  }
  if (Score >= 30) {
    Ksi.setAnimation("Ksi Fastest");
  } else {
    if (Score >= 10) {
      Ksi.setAnimation("Ksi Fast");
    }
  }
  Ksi.collide(LeftWall);
  Ksi.collide(RightWall);
}

//Logan Paul Character Game
function LgnGame() {
  if (!LgnPSongPlaying) {
    playSound("WWE_-Take-Flight-(Logan-Paul).mp3", true);
    LgnPSongPlaying = true;
  }
  if (Lives == 0) {
  gameover = true;
  gameoversound = true;
}
stopSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3");
background("skyblue");
fill("white");
text("Score:", 100, 30);
text(Score, 145, 30);
text("Lives:", 30, 30);
text(Lives, 70, 30);
if (Score >= 30) {
  LgnFloor1.x -= 12;
  LgnFloor2.x -= 12;
  LgnFloor3.x -= 12;
} else {
  if (Score >= 10) {
    LgnFloor1.x -= 8;
    LgnFloor2.x -= 8;
    LgnFloor3.x -= 8;
  } else {
    LgnFloor1.x -= 4;
    LgnFloor2.x -= 4;
    LgnFloor3.x -= 4;
  }
}
  if (Score >= 30) {
  tree1.x -= 12;
  tree2.x -= 12;
  tree3.x -= 12;
  } else {
  if (Score >= 10) {
    tree1.x -= 8;
    tree2.x -= 8;
    tree3.x -= 8;
  } else {
    tree1.x -= 4;
    tree2.x -= 4;
    tree3.x -= 4;
  }
  }

if (Lunchly1.visible) {
  if (Score >= 30) {
  Lunchly1.x -= 12;
  } else if (Score >= 10) {
  Lunchly1.x -= 8;
  } else {
  Lunchly1.x -= 4;
  }
  if (Lunchly1.x < 0) {
  Lunchly1.visible = false;
  }
}
if (Lunchly2.visible) {
  if (Score >= 30) {
    Lunchly2.x -= 12;
  } else {
    if (Score >= 10) {
      Lunchly2.x -= 8;
    } else {
      Lunchly2.x -= 4;
    }
  }
  if (Lunchly2.x < 0) {
    Lunchly2.visible = false;
  }
}
if (Lunchly3.visible) {
    if (Score >= 30) {
      Lunchly3.x -= 12;
    } else {
      if (Score >= 10) {
        Lunchly3.x -= 8;
      } else {
        Lunchly3.x -= 4;
      }
    }
    if (Lunchly3.x < 0){
    Lunchly3.visible = false;
    }
}
if (Lunchables.visible) {
    if (Score >= 30) {
      Lunchables.x -= 12;
    } else {
      if (Score >= 10) {
        Lunchables.x -= 8;
      } else {
        Lunchables.x -= 4;
      }
    }
    if (Lunchables.x < 0){
    Lunchables.visible = false;
    }
}
if (LgnPaul.isTouching(Lunchly1) && Lunchly1.visible) {
  Score += 1;
  Lunchly1.visible = false;
}
if (LgnPaul.isTouching(Lunchly2) && Lunchly2.visible) {
  Score += 1;
  Lunchly2.visible = false;
}
if (LgnPaul.isTouching(Lunchly3) && Lunchly3.visible){
  Score += 1;
  Lunchly3.visible = false;
}
if (LgnPaul.isTouching(Lunchables) && Lunchables.visible){
  Lives -= 1;
  Dmg = true;
  Lunchables.visible = false;
  dmg();
}
if (Math.random()< 0.05){
  SpawnLunchlyandLunchable();
}
if (LgnFloor1.x < -156) { 
  LgnFloor1.x = LgnFloor2.x + LgnFloor2.width;
}
if (LgnFloor2.x < -156) {
  LgnFloor2.x = LgnFloor1.x + LgnFloor1.width;
}
  if (tree1.x < -200) { 
  tree1.x = tree2.x + tree2.width;
  }
  if (tree2.x < -200) {
  tree2.x = tree3.x + tree3.width;
  }
  if (tree3.x < -200) {
  tree3.x = tree1.x + tree1.width;
  }
KsiCss.visible = false;
LgnPaulCss.visible = false;
MrBeastCss.visible = false;
LgnFloor1.visible = true;
LgnFloor2.visible = true;
LgnFloor3.visible = true;
  tree1.visible = true;
  tree2.visible = true;
  tree3.visible = true;
LgnPaul.visible = true;
gravity = 0.47;
  LgnFloor2.y = 475;
  LgnFloor3.y = 475;
  LgnFloor1.y = 475;

if (keyDown("a")) {
  LgnPaul.x -= 3;
} else if (keyDown("d")) {
  LgnPaul.x += 3;
}
if (keyDown("left")) {
LgnPaul.x -= 3;
} else if (keyDown("right")) {
LgnPaul.x += 3;
}

if (keyWentDown("space") && !isJumping) {
  playSound("assets/JUMP-02---AUDIO-FROM-JAYUZUMI.COM.mp3", false);
  yVelocity = jumpspeed;
  isJumping = true;
}
if (isJumping) {
  yVelocity += gravity;
  LgnPaul.y += yVelocity;
}
if (LgnPaul.y >= 250) {
  LgnPaul.y = 250;
  isJumping = false;
  yVelocity = 0;
}
if (Score >= 30) {
  LgnPaul.setAnimation("Lgn Fastest");
} else {
  if (Score >= 10) {
    LgnPaul.setAnimation("Lgn Fast");
  }
}
LgnPaul.collide(LeftWall);
LgnPaul.collide(RightWall);
}

//MrBeast Character Game
function MrBGame() {
  if (!MrBSongPlaying) {
    playSound("Mr-Beast-phonk---SXCREDMANE-(Phonk-Remix)-(TIKTOK-SONG).mp3", true);
    MrBSongPlaying = true;
  }
  if (Lives == 0) {
gameover = true;
gameoversound = true;
}
stopSound("assets/Super-Smash-Bros-Ultimate--Main-Menu-Music--AudioTrimmer.com-.mp3");
background("skyblue");
fill("white");
text("Score:", 100, 30);
text(Score, 145, 30);
text("Lives:", 30, 30);
text(Lives, 70, 30);
if (Score >= 30) {
LgnFloor1.x -= 10;
LgnFloor2.x -= 10;
LgnFloor3.x -= 10;
} else {
if (Score >= 10) {
  LgnFloor1.x -= 6;
  LgnFloor2.x -= 6;
  LgnFloor3.x -= 6;
} else {
  LgnFloor1.x -= 2; 
  LgnFloor2.x -= 2;
  LgnFloor3.x -= 2;
}
}
if (Score >= 30) {
tree1.x -= 10;
tree2.x -= 10;
tree3.x -= 10;
} else {
if (Score >= 10) {
  tree1.x -= 6;
  tree2.x -= 6;
  tree3.x -= 6;
} else {
  tree1.x -= 2; 
  tree2.x -= 2;
  tree3.x -= 2;
}
}

if (feast.visible) {
if (Score >= 30) {
feast.x -= 10;
} else if (Score >= 10) {
feast.x -= 6;
} else {
feast.x -= 2;
}
if (feast.x < 0) {
feast.visible = false;
}
}
if (feast2.visible) {
if (Score >= 30) {
  feast2.x -= 10;
} else {
  if (Score >= 10) {
    feast2.x -= 6;
  } else {
    feast2.x -= 2;
  }
}
if (feast2.x < 0) {
  feast2.visible = false;
}
}
if (feast3.visible) {
  if (Score >= 30) {
    feast3.x -= 10;
  } else {
    if (Score >= 10) {
      feast3.x -= 6;
    } else {
      feast3.x -= 2;
    }
  }
  if (feast3.x < 0){
  feast3.visible = false;
  }
}
if (hersh.visible) {
  if (Score >= 30) {
    hersh.x -= 10;
  } else {
    if (Score >= 10) {
      hersh.x -= 6;
    } else {
      hersh.x -= 2;
    }
  }
  if (hersh.x < 0){
  hersh.visible = false;
  }
}
if (MrB.isTouching(feast) && feast.visible) {
Score += 1;
feast.visible = false;
}
if (MrB.isTouching(feast2) && feast2.visible) {
Score += 1;
feast2.visible = false;
}
if (MrB.isTouching(feast3) && feast3.visible){
Score += 1;
feast3.visible = false;
}
if (MrB.isTouching(hersh) && hersh.visible){
Lives -= 1;
  Dmg = true;
hersh.visible = false;
  dmg();
}
if (Math.random()< 0.05){
SpawnFeastandHersh();
}
if (LgnFloor1.x < -156) { 
LgnFloor1.x = LgnFloor2.x + LgnFloor2.width;
}
if (LgnFloor2.x < -156) {
LgnFloor2.x = LgnFloor1.x + LgnFloor1.width;
}
if (tree1.x < -200) { 
tree1.x = tree2.x + tree2.width;
}
if (tree2.x < -200) {
tree2.x = tree3.x + tree3.width;
}
if (tree3.x < -200) {
tree3.x = tree1.x + tree1.width;
}
KsiCss.visible = false;
LgnPaulCss.visible = false;
MrBeastCss.visible = false;
LgnFloor1.visible = true;
LgnFloor2.visible = true;
LgnFloor3.visible = true;
tree1.visible = true;
tree2.visible = true;
tree3.visible = true;
MrB.visible = true;
gravity = 0.45;
LgnFloor2.y = 475;
LgnFloor3.y = 475;
LgnFloor1.y = 475;
  if (MrBeast) {
    Lives = 5;
    MrBeast = false;
  }

if (keyDown("a")) {
MrB.x -= 3;
} else if (keyDown("d")) {
MrB.x += 3;
}
if (keyDown("left")) {
MrB.x -= 3;
} else if (keyDown("right")) {
MrB.x += 3;
}

if (keyWentDown("space") && !isJumping) {
playSound("assets/JUMP-02---AUDIO-FROM-JAYUZUMI.COM.mp3", false);
yVelocity = jumpspeed;
isJumping = true;
}
if (isJumping) {
yVelocity += gravity;
MrB.y += yVelocity;
}
if (MrB.y >= 250) {
MrB.y = 250;
isJumping = false;
yVelocity = 0;
}
if (Score >= 30) {
MrB.setAnimation("Mrb Fastest");
} else {
if (Score >= 10) {
  MrB.setAnimation("mrb Fast");
}
}
MrB.collide(LeftWall);
MrB.collide(RightWall);
}
//Menu Sprites
var Play = createSprite(90, 100, 105, 35);
Play.visible = false;
var Controls = createSprite(130, 150, 185, 35);
Controls.visible = false;
var HowToPlay = createSprite(150, 200, 230, 35);
HowToPlay.visible = false;
var BackBtn = createSprite(341, 365, 82, 35);
BackBtn.visible = false;
var WASD = createSprite(60, 85);
WASD.setAnimation("WASDD.png_1");
WASD.scale = 1;
WASD.visible = false;
var LR = createSprite(165, 85);
LR.setAnimation("Left/Right");
LR.scale = false;
var SpaceBar = createSprite(95, 145);
SpaceBar.setAnimation("SpaceBar.png_1");
SpaceBar.scale = 0.5;
SpaceBar.visible = false;
var KsiHTP = createSprite(85, 90);
KsiHTP.setAnimation("Ksi Css.png_2");
KsiHTP.scale = 0.28;
KsiHTP.visible = false;
var LgnHTP = createSprite(85, 205);
LgnHTP.setAnimation("LoganPaul-ezgif.com-resize.png_1");
LgnHTP.scale = 0.38;
LgnHTP.visible = false;
var MrbHTP = createSprite(85, 330);
MrbHTP.setAnimation("Mr-Beast-with-Money.png_1");
MrbHTP.scale = 0.41;
MrbHTP.visible = false;

//Map Border 
var LeftWall = createSprite(-1, 200, 1, 400);
var RightWall = createSprite(401, 200, 1, 400);
//Ksi Game Sprites
var floor1 = createSprite(200, 475);
floor1.setAnimation("Ksi Floor.jpg_1");
floor1.scale = 1.2;
floor1.visible = false;
var floor2 = createSprite(600, 475);
floor2.setAnimation("Ksi Floor.jpg_1");
floor2.scale = 1.2;
floor2.visible = false;
var floor3 = createSprite(1000, 475);
floor3.setAnimation("Ksi Floor.jpg_1");
floor3.scale = 1.2;
floor3.visible = false;
var tree1 = createSprite(200, 230);
tree1.setAnimation("tree-ezgif.com-resize.png_1");
tree1.visible = false;
var tree2 = createSprite(600, 230);
tree2.setAnimation("tree-ezgif.com-resize.png_1");
tree2.visible = false;
var tree3 = createSprite(1000, 230);
tree3.setAnimation("tree-ezgif.com-resize.png_1");
tree3.visible = false;
var LgnFloor1 = createSprite(200, 475);
LgnFloor1.setAnimation("Lgn Floor");
LgnFloor1.scale = 1.2;
LgnFloor1.visible = false;
var LgnFloor2 = createSprite(600, 475);
LgnFloor2.setAnimation("Lgn Floor");
LgnFloor2.scale = 1.2;
LgnFloor2.visible = false;
var LgnFloor3 = createSprite(1000, 475);
LgnFloor3.setAnimation("Lgn Floor");
LgnFloor3.visible = 1.2;
LgnFloor3.visible = false;
var Lunchables = createSprite(200, 200);
Lunchables.setAnimation("Lunchables.png_1");
Lunchables.visible = false;
Lunchables.scale = 0.15;
var PrimeBlue = createSprite(300, 200);
PrimeBlue.setAnimation("Prime Blue F.png_1");
PrimeBlue.scale = 0.12;
PrimeBlue.visible = false;
var PrimeIce = createSprite(100, 200);
PrimeIce.setAnimation("Prime Ice Pop F.png_1");
PrimeIce.scale = 0.13;
PrimeIce.visible = false;
var PrimeGold = createSprite(200, 200);
PrimeGold.setAnimation("Golden Prime FF.png_1");
PrimeGold.scale = 0.18;
PrimeGold.visible = false;
var PrimePink = createSprite(200, 200);
PrimePink.setAnimation("PrimePink");
PrimePink.scale = 0.13;
PrimePink.visible = false;
var PrimeLemon = createSprite(200, 200);
PrimeLemon.setAnimation("PrimeLemon");
PrimeLemon.scale = 0.13;
PrimeLemon.visible = false;
var Ksi = createSprite(200, 250);
Ksi.setAnimation("Ksi");
Ksi.scale = 0.4;
Ksi.visible = false;
Ksi.setCollider("rectangle", 0, 0, 100, 400);
//Logan Paul Game Sprites
var Lunchly1 = createSprite(200, 200);
Lunchly1.setAnimation("lunchly.png_1");
Lunchly1.scale = 0.15;
Lunchly1.visible = false;
var Lunchly2 = createSprite(200, 200);
Lunchly2.setAnimation("lunchly2.png_1");
Lunchly2.scale = 0.15;
Lunchly2.visible = false;
var Lunchly3 = createSprite(200, 200);
Lunchly3.setAnimation("lunchly 3.png_1");
Lunchly3.scale = 0.15;
Lunchly3.visible = false;
var LgnPaul = createSprite(200, 250);
LgnPaul.setAnimation("Lgn");
LgnPaul.scale = 0.6;
LgnPaul.visible = false;
LgnPaul.setCollider("rectangle", 0, -10, 90, 220);
//Mr Beast Game 
var feast = createSprite(200, 200);
feast.setAnimation("feastables");
feast.scale = 0.15;
feast.visible = false;
var feast2 = createSprite(200, 200);
feast2.setAnimation("feast2");
feast2.scale = 0.15;
feast2.visible = false;
var feast3 = createSprite(200, 300);
feast3.setAnimation("feast3");
feast3.scale = 0.19;
feast3.visible = false;
var hersh = createSprite(200, 200);
hersh.setAnimation("Hersheys");
hersh.scale = 0.16;
hersh.visible = false;
var MrB = createSprite(200, 250);
MrB.setAnimation("1-ezgif.com-gif-maker.png_1");
MrB.scale = 0.3;
MrB.setCollider("rectangle", 0, -20, 100, 450);
MrB.visible = false;
//Css Menu Sprites
var KsiCss = createSprite(67, 210);
KsiCss.setAnimation("Ksi Css.png_2");
KsiCss.scale = 0.43;
KsiCss.visible = false;
var LgnPaulCss = createSprite(200, 210);
LgnPaulCss.setAnimation("LoganPaul-ezgif.com-resize.png_1");
LgnPaulCss.scale = 0.53;
LgnPaulCss.visible = false;
var MrBeastCss = createSprite(330, 210);
MrBeastCss.setAnimation("Mr-Beast-with-Money.png_1");
MrBeastCss.scale = 0.56;
MrBeastCss.visible = false;

//Variables
var CurrentScreen = "start";
var CssThemePlaying = false;
var KsiSongPlaying = false;
var LgnPSongPlaying = false;
var MrBSongPlaying = false;
var Dmg = false;
var isJumping = false;
var jumpspeed = -10;
var gravity = 0.5;
var yVelocity = 0;
var Score = 0;
var Lives = 3;
var gameover = false;
var gameoversound = false;
var MrBeast = false;
var PlrKsi = false;
var PlrLgn = false;
var PlrMrb = false;
var DmgSnd = false;
var popupVisible = false;
var popupText = "";
var popupX;
var popupY;
var popupWidth = 120;
var popupHeight = 40;
var popupColor = "";
function draw() {
  if (gameover) {
    if (gameoversound) {
      playSound("assets/fnaf-world-death-sound-made-with-Voicemod.mp3", false);
      gameoversound = false;
    }
    stopSound("assets/KSI---Thick-Of-It-ft.-Trippie-Redd.mp3");
    stopSound("WWE_-Take-Flight-(Logan-Paul).mp3");
    stopSound("Mr-Beast-phonk---SXCREDMANE-(Phonk-Remix)-(TIKTOK-SONG).mp3");
    background("black");
    fill("red");
    textFont("Times New Roman");
    textSize(40);
    text("GAME OVER", 88, 190);
    fill("white");
    textFont("Times New Roman");
    textSize(41);
    text("GAME OVER", 90, 190);
    textSize(14);
    fill("white");
    text("Score:", 150, 220);
    text(Score, 220, 220);
    return;
  }
  if (CurrentScreen == "start") {
    StartScreen();
  } else if (CurrentScreen == "Css") {
    CssScreen();
  } else if (CurrentScreen == "KsiGame") {
    KsiGame();
  } else if (CurrentScreen == "LgnGame") {
    LgnGame();
  } else if (CurrentScreen == "MrBGame") {
    MrBGame();
  } else if ((CurrentScreen == "PlayScreen")) {
    PlayScreen();
  } else if (CurrentScreen == "Controls") {
    ControlsScreen();
  } else if (CurrentScreen == "HowToPlay") {
    HowToPlayScreen();
  }
  showMobileControls(true, true, true, true);
  drawSprites();
  if (CurrentScreen == "Css") {
    checkMouseHover();
    updatePopupPosition();
    drawPopup();
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
