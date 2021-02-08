import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const RaisedHandGesture = new GestureDescription("raised_hand");

// Thumb
RaisedHandGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
RaisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalRight,
  1.0
);
RaisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.HorizontalLeft,
  1.0
);
RaisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpLeft,
  0.2
);
RaisedHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  0.2
);
// Index

RaisedHandGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//RaisedHandGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
RaisedHandGesture.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  1.0
);
RaisedHandGesture.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpRight,
  1.0
);

// Middle finger
RaisedHandGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
RaisedHandGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring finger

RaisedHandGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//RaisedHandGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
RaisedHandGesture.addDirection(
  Finger.Ring,
  FingerDirection.DiagonalUpLeft,
  1.0
);
RaisedHandGesture.addDirection(
  Finger.Ring,
  FingerDirection.DiagonalUpRight,
  1.0
);

// Pinky

RaisedHandGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
//RaisedHandGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
RaisedHandGesture.addDirection(
  Finger.Pinky,
  FingerDirection.DiagonalUpLeft,
  1.0
);
RaisedHandGesture.addDirection(
  Finger.Pinky,
  FingerDirection.DiagonalUpRight,
  1.0
);
