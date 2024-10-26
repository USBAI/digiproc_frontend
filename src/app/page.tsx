import Image from "next/image";
import NavBar from "./components/nav_bar";

export default function Home() {
  const imageSources = [
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/6718f1953cc049cd5476c835_billerud%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/67175dedf67e09bba0b73781_erasteel.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/670797e9f6d4983ffaf1aa15_dahl.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/66fcf746f9f4b328f74e79ad_dfds1%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/665590badf5dca32c2b85459_salta%CC%8Akvarn%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/666052542f584e52f6fe4723_emba%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/6639d87e1b3e106a731b80e3_Gunnebo%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/6616923acd84cfe2aeac4165_presto.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/66055efb14b179cf3a45e12b_aarke.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/6614f1d65fac644df4d857a5_rottne.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65f05c912820d4fc0e654bf2_saft.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65d3b90adee8b56ded12a1d0_ap%26t.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65d3087551828269a35eb040_GK%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65cb8455facc8943e1a7bfb4_newsec.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65b90993e71fdc18e7f3bdd9_Group%2034703.png",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65b9098d6d7044174d497631_Group%2034702.png",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65a63d2baf6fe0a7e3ed58be_Group%2034701.png",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65a63cf55d8db6610fcc7510_Group%2034700.png",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/656da6b88bd12f97b5157e1a_sec.png",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65688638f6cf473a1f8cbfc4_CWS%202.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/656885d4007363b232a92eb0_optigroup%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/655c738d1e9acc520d26fc05_Cambio%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65535b5f304e187c7be50d0a_PAC.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65535b26853e138887be93a8_MASKE.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/6527b5023386dc06afc54a92_E%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65040545889ae4cdb7eff9fb_epiroc%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65040524889ae4cdb7efdfaf_haarslev%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/651bc9bf5d1d847ed17d14a9_Akind%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/645ce8ff7fbebda20de2baa9_rillion%201.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/64478d44051b33ebbab8600d_qtech.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0f5e14002c1336d5d_skf.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0b923667586fedb1f_sats.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c197f6a15ea8d1be1e_elexia.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1cc98cffd835fec29_altiden.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1cc98cfbffb5fec2a_ambea.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0e65e5e69afe10977_karo.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1a277400ca681d9e5_avarn.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c21147ab0c4cf4e578_abb.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1b6cdb7847a4d4aac_tele2.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1c01d2b486f9e967f_cloetta.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c11c0ff938b6fead0a_gant.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1cc98cfb0795fec28_anicura.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0c766a01576521db8_lantmannen.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c11b802003696a527b_stanley.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1e65e5e0be2e10984_ginatricot.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1242247a0caf23428_allente.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1297b5624312758e4_transdev.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1cb48251f31868104_aleris.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c2b6cdb7d93b4d4aad_afry.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0f5e140aeaa336d5c_unilabs.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c043f32e64cebe2e86_munters.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0389ed043a1bdd9c0_ramirent.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c02ba5f51af5ac55fc_paulig.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0389ed0408fbdd9bc_nordnet.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0408e7e02439e445f_svitzer.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1b2d711ce4f8b363c_apl.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0cf5bbec70b2846d7_mfex.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c01147ab05e1f4e56d_nobina.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c07b12a5a284a74077_techem.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1a27740946581d9de_svenskmarkservice.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c1b2d71158d08b360c_smamineral.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0e389852375699848_orchid.svg",
    "https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/642c03c0418b01a2739156f6_rydsglas.svg"
  ];
  
  





  return (
    <>
      <div>
        <NavBar />
        <div>
          <section className="__home_section1_499">
            <div className="content_main_to_399d9">
              <div className="_399d9_divfirst">
                <div className="block" id="introto_digiproc">
                  <h1>We manage your supplier tail!</h1>
                  <p>We help companies to take control of and optimize their supplier tail. With visibility and continuous actions, we reduce cost, improve cash flow and increase compliance. <br /> <br />Addressing your supplier tail has never been easier!</p>
                  <br /><br />
                  <a href="" className="tryustoday">Try Us Today!</a>
                </div>
              </div>
              <div className="_399d9_divsecond">
                <img src="https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65b24607a70bd488c0433219_heropic.png" alt="" />
              </div>
            </div>
          </section>
          <section className="__home_section2_499">
            <div className="companies_4r9je">
              <div className="connections_we_have">
                <div className="logo-loop-container">
                  <div className="flex-wrapper">
                    {imageSources.map((src, index) => (
                      <img key={index} src={src} loading="lazy" width="108" alt="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="__negotiation__process">
              <div className="__negotiation__process_title">
                <h1>Our Streamlined Negotiation Process</h1>
              </div>
              <div className="__negotiation__process_d9j">
                <div>
                  <p>We serve you with negotiation proposals based on data, insights and your needs</p>
                </div>
                <div>
                  <p>You select which negotiation to launch</p>
                </div>
                <div>
                  <p>Negotiation is automatically done in 8 days</p>
                </div>
                <div>
                  <p>Result is displayed on your dashboard</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
