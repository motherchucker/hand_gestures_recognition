import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const OkGesture = new GestureDescription("ok");

// Thumb
OkGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
OkGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);
OkGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);

// Index
OkGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.9);
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.9);

// Others
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OkGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
  OkGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
  OkGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}
