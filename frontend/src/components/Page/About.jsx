import React from "react";
import { FiFlag, FiUsers, FiAward } from "react-icons/fi";

const AboutTimnasID = () => {
  return (
    <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tentang Timnas ID
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Timnas Indonesia adalah kebanggaan bangsa yang selalu memberikan
          semangat dan inspirasi bagi seluruh rakyat Indonesia. Dari perjuangan
          di lapangan hijau hingga mengharumkan nama bangsa di kancah
          internasional, kami adalah satu, kami adalah Garuda!
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white text-red-900 rounded-2xl shadow-lg">
            <FiFlag className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">Sejarah</h2>
            <p className="text-center text-base">
              Berdiri sejak tahun 1930, Timnas Indonesia telah mencatatkan
              sejarah panjang dalam dunia sepak bola, penuh dengan perjuangan
              dan kemenangan.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white text-red-900 rounded-2xl shadow-lg">
            <FiUsers className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">Komunitas</h2>
            <p className="text-center text-base">
              Dukungan dari suporter fanatik, komunitas Garuda, menjadi kekuatan
              utama yang tak tergantikan untuk Timnas kita.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white text-red-900 rounded-2xl shadow-lg">
            <FiAward className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">Prestasi</h2>
            <p className="text-center text-base">
              Dengan gelar juara regional dan penampilan internasional, Timnas
              Indonesia terus berjuang untuk mengukir prestasi lebih tinggi.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bersama Kita Kuat, Bersama Kita Garuda!
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Bergabunglah dengan jutaan pendukung Timnas Indonesia dan dukung
          perjuangan mereka untuk mengibarkan Merah Putih di puncak dunia.
        </p>
        <a
          href="https://www.instagram.com/pssi/?hl=id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-red-900 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Gabung Komunitas
        </a>
      </div>
    </section>
  );
};

export default AboutTimnasID;
