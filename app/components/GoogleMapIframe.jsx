const GoogleMapIframe = () => {
    return (
      <div>
        <iframe
          width="393"
          height="330"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4160585852384!2d44.499101276342004!3d40.17918517146953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041a9bf5a3a3471%3A0x5d5f42ebc5e0b6!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1711925123456"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMapIframe;
  