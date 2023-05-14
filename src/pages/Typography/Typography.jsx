import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Video from "../../components/Video/Video";
import TypographyMotion from "../../assets/typography/concept.mp4";
import TypographyLogo from "../../assets/typography/logo.svg";

import "./Typography.css";

const Typography = () => {
  return (
    <div>
      <NavBar />
      <div className="typography-text">
        <div>
          <img
            src={TypographyLogo}
            alt="typography logo"
            className="typography-logo"
          />
        </div>
        <p>
          Το 25ο γράμμα του ελληνικού αλφάβητου κρύβεται κάπου μέσα στη
          Θεσσαλονίκη.
        </p>
        <p>
          Η αναζήτηση του ξεκινά από το αρχαιολογικό μουσείο της Θεσσαλονίκης.
          Εκεί ανακαλύπτονται διάφορα γράμματα της αρχαίας ελληνικής γλώσσας που
          είτε έχουν αλλάξει μορφή είτε έχουν καταργηθεί από τη σύγχρονη
          ελληνική γλώσσα.
        </p>
        <p>
          Έπειτα η έρευνα θα συνεχιστεί σε διάφορα άλλα μνημεία της πόλης ώστε
          να ελεγχθεί η πιθανότητα το γράμμα αυτό να έχει κρυφτεί σε άλλες
          γλώσσες της πόλης χωρίς να το έχουμε αντιληφθεί.
        </p>
        <p>Παρακολουθήστε το ταξίδι αυτό στο παρακάτω βίντεο.</p>
      </div>
      <div>
        <Video
          src={TypographyMotion}
          loop={false}
          muted={false}
          autoPlay={false}
          controls={true}
          className="typography-video"
        />
      </div>
    </div>
  );
};

export default Typography;
