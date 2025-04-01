const OpenStreetMapIframe = () => {
    return (
      <div>
        <h2>OpenStreetMap (Iframe)</h2>
        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.openstreetmap.org/export/embed.html?bbox=44.4691%2C40.1592%2C44.5291%2C40.1992&layer=mapnik"
        ></iframe>
      </div>
    );
  };
  
  export default OpenStreetMapIframe;
  