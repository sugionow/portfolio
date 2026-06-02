import { type CSSProperties, PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const mobileRoles = [
    config.developer.title,
    config.developer.secondaryTitle,
    config.developer.tertiaryTitle,
    config.developer.quaternaryTitle,
  ];
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [cardGlow, setCardGlow] = useState({ x: 50, y: 50 });
  const [isCardActive, setIsCardActive] = useState(false);

  useEffect(() => {
    const currentRole = mobileRoles[activeRoleIndex] ?? "";
    const typingSpeed = isDeleting ? 45 : 85;
    const isWordComplete = typedRole === currentRole;
    const isWordEmpty = typedRole.length === 0;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (isWordComplete) {
          setIsDeleting(true);
          return;
        }

        setTypedRole(currentRole.slice(0, typedRole.length + 1));
        return;
      }

      if (!isWordEmpty) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
        return;
      }

      setIsDeleting(false);
      setActiveRoleIndex((prev) => (prev + 1) % mobileRoles.length);
    }, isWordComplete && !isDeleting ? 1400 : typingSpeed);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activeRoleIndex, isDeleting, mobileRoles, typedRole]);

  const updateCardTilt = (
    clientX: number,
    clientY: number,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;
    const rotateY = (relativeX - 0.5) * 24;
    const rotateX = (0.5 - relativeY) * 24;

    setCardRotation({ x: rotateX, y: rotateY });
    setCardGlow({
      x: Math.max(0, Math.min(100, relativeX * 100)),
      y: Math.max(0, Math.min(100, relativeY * 100)),
    });
  };

  const resetCardTilt = () => {
    setIsCardActive(false);
    setCardRotation({ x: 0, y: 0 });
    setCardGlow({ x: 50, y: 50 });
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {" "}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.developer.title}</div>
              <div className="landing-h2-2">{config.developer.secondaryTitle}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.developer.tertiaryTitle}</div>
              <div className="landing-h2-info-1">{config.developer.quaternaryTitle}</div>
            </h2>
            <p className="landing-copy">{config.developer.shortDescription}</p>
          </div>
          <div className="mobile-photo">
            <div
              className={`mobile-photo-frame ${isCardActive ? "is-active" : ""}`}
              style={
                {
                  transform:
                    `perspective(1200px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) scale(${isCardActive ? 1.02 : 1})`,
                  "--glow-x": `${cardGlow.x}%`,
                  "--glow-y": `${cardGlow.y}%`,
                } as CSSProperties
              }
              onMouseMove={(event) => {
                setIsCardActive(true);
                updateCardTilt(event.clientX, event.clientY, event.currentTarget);
              }}
              onMouseLeave={resetCardTilt}
              onTouchStart={(event) => {
                const touch = event.touches[0];
                if (!touch) return;
                setIsCardActive(true);
                updateCardTilt(touch.clientX, touch.clientY, event.currentTarget);
              }}
              onTouchMove={(event) => {
                const touch = event.touches[0];
                if (!touch) return;
                updateCardTilt(touch.clientX, touch.clientY, event.currentTarget);
              }}
              onTouchEnd={resetCardTilt}
              onTouchCancel={resetCardTilt}
            >
              <div className="mobile-photo-shine" aria-hidden="true"></div>
              <img
                src="/images/sugiono-profile-mobile.jpeg"
                alt={config.developer.fullName}
              />
            </div>
          </div>
          <div className="landing-mobile-typed" aria-label="Current role">
            <div className="landing-mobile-typed-label">Specializing in</div>
            <div className="landing-mobile-typed-line">
              <span>{typedRole}</span>
              <i className="landing-mobile-caret" aria-hidden="true"></i>
            </div>
            <p className="landing-mobile-copy">{config.developer.shortDescription}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
