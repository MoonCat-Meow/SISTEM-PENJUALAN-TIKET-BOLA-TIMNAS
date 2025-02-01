import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// import PlayerPhoto from "../../assets/player-photo.jpg"; // Ganti dengan path foto pemain

const players = [
  {
    id: 1,
    name: "Marteen Paes",
    description:
      "Penjaga gawang muda berbakat dengan pengalaman bermain di liga internasional. Paes dikenal memiliki refleks cepat dan kemampuan distribusi bola yang baik.",
    caps: 10,
    goals: 0,
    assists: 0,
    email: "marteen.paes@timnas.id",
    phone: "+62 812 3456 7890",
    location: "Rotterdam, Belanda",
    photo:
      "https://akcdn.detik.net.id/community/media/visual/2024/09/06/maarten-paes_43.jpeg?w=600&q=90",
  },
  {
    id: 2,
    name: "Calvin Verdonk",
    description:
      "Bek serba bisa yang dikenal dengan ketenangannya dalam bertahan dan kontribusinya dalam serangan. Verdonk memiliki pengalaman bermain di Eropa.",
    caps: 15,
    goals: 1,
    assists: 3,
    email: "calvin.verdonk@timnas.id",
    phone: "+62 813 4567 8901",
    location: "Dordrecht, Belanda",
    photo:
      "https://assets.goal.com/images/v3/blt697cd39132d07469/Calvin_Verdonk1.jpg",
  },
  {
    id: 3,
    name: "Jay Idzes",
    description:
      "Bek tengah dengan kemampuan fisik yang kuat dan kecepatan membaca permainan. Idzes adalah andalan di lini pertahanan.",
    caps: 12,
    goals: 0,
    assists: 1,
    email: "jay.idzes@timnas.id",
    phone: "+62 814 5678 9012",
    location: "Tilburg, Belanda",
    photo:
      "https://turunminum.id/wp-content/uploads/2024/03/DSC_5014-crop-scaled.jpg",
  },
  {
    id: 4,
    name: "Rizky Ridho",
    description:
      "Pemain muda berbakat yang tampil gemilang di lini pertahanan. Ridho memiliki kemampuan intersepsi dan tackling yang baik.",
    caps: 20,
    goals: 2,
    assists: 1,
    email: "rizky.ridho@timnas.id",
    phone: "+62 815 6789 0123",
    location: "Surabaya, Indonesia",
    photo:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/11/20/Rizky-Ridho-Dery-RidwansahJPG-1343051334.jpg",
  },
  {
    id: 5,
    name: "Justin Hubner",
    description:
      "Bek tengah dengan tinggi badan yang ideal dan kemampuan bertahan solid. Hubner adalah ancaman saat situasi bola mati.",
    caps: 8,
    goals: 1,
    assists: 0,
    email: "justin.hubner@timnas.id",
    phone: "+62 816 7890 1234",
    location: "Den Bosch, Belanda",
    photo:
      "https://imgcdn.espos.id/@espos/images/2024/06/justin-hubner.jpg?quality=60",
  },
  {
    id: 6,
    name: "Nathan Tjoe-A-On",
    description:
      "Bek sayap yang memiliki kecepatan dan ketahanan fisik luar biasa. Nathan sering membantu serangan dari sisi lapangan.",
    caps: 10,
    goals: 0,
    assists: 3,
    email: "nathan.tjoe@timnas.id",
    phone: "+62 817 8901 2345",
    location: "Dordrecht, Belanda",
    photo:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/08/2024/05/03/FotoJet-22-3004890375.jpg",
  },
  {
    id: 7,
    name: "Marselino Ferdinan",
    description:
      "Gelandang muda yang dikenal dengan kreativitas dan visi bermainnya. Marselino sering menjadi pembeda di lini tengah.",
    caps: 18,
    goals: 6,
    assists: 7,
    email: "marselino@timnas.id",
    phone: "+62 818 9012 3456",
    location: "Surabaya, Indonesia",
    photo:
      "https://asset-2.tstatic.net/jatim/foto/bank/images/Sosok-Marselino-Ferdinan-pemain-Timnas-Indonesia-yang-diwaspadai-Australia-di-Piala-Asia-2024.jpg",
  },
  {
    id: 8,
    name: "Tom Haye",
    description:
      "Gelandang kreatif dengan kemampuan distribusi bola dan penguasaan lini tengah yang luar biasa.",
    caps: 5,
    goals: 1,
    assists: 4,
    email: "tom.haye@timnas.id",
    phone: "+62 819 0123 4567",
    location: "Amsterdam, Belanda",
    photo:
      "https://cdn.rri.co.id/berita/Bengkulu/o/1726315995804-66b376a259c15-gelandang-timnas-indonesia-thom-haye_1265_711/5t2jc7sctp13ubx.jpeg",
  },
  {
    id: 9,
    name: "Ragnar Oratmangoen",
    description:
      "Penyerang serba bisa yang memiliki kecepatan dan kemampuan dribbling. Ragnar sering menjadi pembeda dalam pertandingan.",
    caps: 12,
    goals: 4,
    assists: 5,
    email: "ragnar.oratmangoen@timnas.id",
    phone: "+62 820 1234 5678",
    location: "Haarlem, Belanda",
    photo:
      "https://thumb.viva.co.id/media/frontend/thumbs3/2024/09/10/66e061b8c89f4-ragnar-oratmangoen-timnas-indonesia-vs-australia-di-kualifikasi-piala-dunia_1265_711.jpg",
  },
  {
    id: 10,
    name: "Mees Hilgers",
    description:
      "Bek tengah tangguh yang dikenal dengan permainan lugas dan kemampuannya memimpin lini pertahanan.",
    caps: 7,
    goals: 0,
    assists: 0,
    email: "mees.hilgers@timnas.id",
    phone: "+62 821 2345 6789",
    location: "Utrecht, Belanda",
    photo:
      "https://akcdn.detik.net.id/community/media/visual/2024/10/12/mees-hilgers_43.jpeg?w=1200",
  },
  {
    id: 11,
    name: "Rafael Struick",
    description:
      "Penyerang muda dengan insting mencetak gol yang tajam. Struick adalah salah satu talenta paling menjanjikan di Timnas.",
    caps: 9,
    goals: 5,
    assists: 2,
    email: "rafael.struick@timnas.id",
    phone: "+62 822 3456 7890",
    location: "Leiden, Belanda",
    photo:
      "https://img.okezone.com/content/2023/06/23/51/2835940/beredar-foto-rafael-struick-saat-kecil-ketampanannya-jadi-sorotan-ehhXhYKnGH.jpg",
  },
  {
    id: 12,
    name: "Eliano Reijnders",
    description:
      "Gelandang bertahan dengan kemampuan tekel dan distribusi bola yang memukau. Eliano adalah jangkar lini tengah Timnas.",
    caps: 10,
    goals: 0,
    assists: 1,
    email: "eliano.reijnders@timnas.id",
    phone: "+62 823 4567 8901",
    location: "Zwolle, Belanda",
    photo: "https://bacakoran.co/upload/55d4aa0b3677b9b5c1230af65a444b60.jpeg",
  },
  {
    id: 13,
    name: "Shayne Pattynama",
    description:
      "Bek kiri naturalisasi dengan akurasi umpan silang yang tinggi. Pattynama sering membantu serangan dari sisi kiri.",
    caps: 14,
    goals: 0,
    assists: 4,
    email: "shayne.pattynama@timnas.id",
    phone: "+62 824 5678 9012",
    location: "Utrecht, Belanda",
    photo:
      "https://img.okezone.com/content/2024/10/04/51/3070797/shayne-pattynama-dipanggil-shin-tae-yong-ke-timnas-indonesia-kas-eupen-doakan-sukses-di-kualifikasi-piala-dunia-2026-yKEoPWGJwZ.jpg",
  },
  {
    id: 14,
    name: "Sandy Walsh",
    description:
      "Bek kanan dengan pengalaman bermain di liga Eropa. Walsh memiliki kemampuan bertahan dan menyerang yang seimbang.",
    caps: 15,
    goals: 1,
    assists: 3,
    email: "sandy.walsh@timnas.id",
    phone: "+62 825 6789 0123",
    location: "Brussels, Belgia",
    photo:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/98/2024/06/27/Sandy-Walsh-usai-bertanding-Instagram-sandywalsh-2284979679.jpg",
  },
];

const ProfileTimnasID = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Profil Pemain
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Mengenal lebih dekat para pahlawan Garuda yang berjuang di lapangan
            hijau.
          </p>
        </div>

        {/* Player Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div>
                <img
                  src={player.photo}
                  alt={player.name}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>

              {/* Details Section */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  {player.name}
                </h2>
                <p className="text-gray-700 mb-4">{player.description}</p>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-red-900">
                      {player.caps}
                    </h3>
                    <p className="text-gray-600">Caps</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-red-900">
                      {player.goals}
                    </h3>
                    <p className="text-gray-600">Goals</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-red-900">
                      {player.assists}
                    </h3>
                    <p className="text-gray-600">Assists</p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FiMail className="text-red-900 text-xl mr-2" />
                    <span>{player.email}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiPhone className="text-red-900 text-xl mr-2" />
                    <span>{player.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiMapPin className="text-red-900 text-xl mr-2" />
                    <span>{player.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileTimnasID;
