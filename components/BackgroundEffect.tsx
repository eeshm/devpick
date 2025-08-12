// components/BackgroundEffect.js
export default function BackgroundEffect() {
return (
  <div
    className="fixed bottom-0 left-0 w-full h-[90vh] -z-[10] "
    style={{
      background: 'radial-gradient(1920px 100% at 50% 100%, rgba(155, 28, 49, 0.6) 0%, rgba(80, 56, 255, 0.5) 50%, transparent 100%)',
      maskImage: 'radial-gradient(1920px 100% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
      opacity: 1,
    }}
  ></div>
);


}
