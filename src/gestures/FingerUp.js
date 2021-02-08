import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const FingerUpGesture = new GestureDescription("finger_up");

// Thumb

FingerUpGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
FingerUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
FingerUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
FingerUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
FingerUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FingerUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
FingerUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
FingerUpGesture.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0
);

// Others
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FingerUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  FingerUpGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  FingerUpGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 1.0);
  FingerUpGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 1.0);
}

FingerUpGesture.setWeight(Finger.Index, 5);
