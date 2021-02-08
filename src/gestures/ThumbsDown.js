import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const ThumbsDownGesture = new GestureDescription("thumbs_down");

// Thumbs streched out and pointing down
ThumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
ThumbsDownGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalDownLeft,
  0.2
);
ThumbsDownGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalDownRight,
  0.2
);

// other fingers all curled up
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ThumbsDownGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
  ThumbsDownGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  ThumbsDownGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}
