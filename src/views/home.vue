<script>
import PrimeVue from 'primevue/config'
import profileImg from '@/assets/img/profile.jpg'
import wordImg from '@/assets/img/word.png'
import humenImg from '@/assets/img/humen.png'
import emailImg from '@/assets/img/email.png'
import educateImg from '@/assets/img/educate.png'
import programImg from '@/assets/img/program.png'
import dataImg from '@/assets/img/data.png'
import excelImg from '@/assets/img/excel.png'
import powerpointImg from '@/assets/img/powerpoint.png'
import procreateImg from '@/assets/img/procreate.png'
import limsImg from '@/assets/img/lims.png'
import gitlabImg from '@/assets/img/gitlab.png'
import visualImg from '@/assets/img/visual.png'
import psImg from '@/assets/img/ps.png'
import xamppImg from '@/assets/img/xampp.png'
import cerPHPImg from '@/assets/img/cer-PHP.jpg'
import cerSQLImg from '@/assets/img/cer-SQL.png'
import projectCrud1Img from '@/assets/img/project-crud1.jfif'
import projectCustomer1Img from '@/assets/img/project-customer1.jfif'
import projectCustomer2Img from '@/assets/img/project-customer2.jfif'
import projectCustomer3Img from '@/assets/img/project-customer3.jfif'
import projectPHP1Img from '@/assets/img/project-PHP1.jfif'
import projectPHP2Img from '@/assets/img/project-PHP2.jfif'
import projectPHP3Img from '@/assets/img/project-PHP3.jfif'
import transcriptImg from '@/assets/img/transcript.png'

export default {
  components: {
    PrimeVue,
  },
  data() {
    return {
      profileImage: profileImg,
      humenImage: humenImg,
      emailImage: emailImg,
      educateImage: educateImg,
      programImage: programImg,
      dataImage: dataImg,
      wordImage: wordImg,
      excelImage: excelImg,
      powerpointImage: powerpointImg,
      limsImage: limsImg,
      procreateImage: procreateImg,
      psImage: psImg,
      xamppImage: xamppImg,
      visualImage: visualImg,
      gitlabImage: gitlabImg,
      transcriptImage: transcriptImg,
      cerSQLImage: cerSQLImg,
      cerPHPImage: cerPHPImg,
      projectPHP1Image: projectPHP1Img,
      projectPHP2Image: projectPHP2Img,
      projectPHP3Image: projectPHP3Img,
      projectCrud1Image: projectCrud1Img,
      projectCustomer1Image: projectCustomer1Img,
      projectCustomer2Image: projectCustomer2Img,
      projectCustomer3Image: projectCustomer3Img,
    }
  },
}
</script>
<template>
  <div class="max-w-[830px] w-full">
    <div
      class="w-[827px] h-[1169px] border-2 border-slate-200 grid grid-cols-4 relative"
    >
      <div
        class="w-[827px] h-[300px] bg-gradient-to-t from-[#c0daf0] from-10% via-[#d2e4f4] via-40% to-[#ffffff] to-90% absolute bottom-0"
      ></div>
      <div class="col-span-2 relative">
        <div
          class="w-[300px] h-[1160px] bg-gradient-to-t from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-4 mt-1 rounded-t-full absolute"
        ></div>
        <div
          class="w-[140px] h-[140px] bg-gradient-to-r from-[#3b80c0] via-[#7cacdb] to-[#d4e6f7] ml-4 rounded-tr-full absolute bottom-0"
          style="
            background: radial-gradient(
              circle at 10% 50% 30%,
              #3b80c0,
              #7cacdb,
              #99c1e7
            );
          "
        ></div>
        <img
          :src="profileImage"
          alt="Profile Image"
          class="w-[200px] h-[250px] rounded-full relative ml-16 mt-12"
        />
        <div class="relative text-white text-[23px] mt-2 ml-9">
          <span class="flex items-center">
            <img
              :src="humenImage"
              alt="Humen Image"
              class="w-[30px] h-[30px] rounded-full relative mr-2"
            />
            <strong> ข้อมูลส่วนตัว</strong>
          </span>
        </div>
        <div class="text-white text-[18px] relative mt-1 ml-[75px]">
          วันเกิด : 25/11/2542<br />
          เพศ : หญิง<br />
          อายุ : 24 ปี<br />
          สัญชาติ : ไทย
        </div>

        <div class="relative font-bold text-white text-[23px] mt-2 ml-9">
          <span class="flex items-center">
            <img
              :src="emailImage"
              alt="email Image"
              class="w-[30px] h-[30px] rounded-full relative mr-2"
            />
            <strong>ช่องทางการติดต่อ</strong>
          </span>
        </div>
        <div class="text-white text-[18px] relative mt-1 ml-[75px]">
          0972079301<br />
          Romchalee477@gmail.com<br />
          207 ม.19 ต.ตูมใหญ่ <br />
          อ.คูเมือง จ.บุรีรัมย์ 31190
        </div>
        <div class="relative text-white text-[23px] mt-2 ml-9">
          <span class="flex items-center">
            <img
              :src="educateImage"
              alt="educate Image"
              class="w-[32px] h-[32px] rounded-full relative mr-2"
            />
            <strong> ประวัติการศึกษา</strong>
          </span>
        </div>
        <div class="text-white text-[18px] relative mt-1 ml-[75px]">
          มหาวิทยาลัยราชภัฏบุรีรัมย์<br />
          สาขา เคมี GPAX 3.56<br />
          มหาวิทยาลัยสุโขทัยธรรมาธิราช<br />
          กำลังศึกษา สาขา วิทยาศาสตร์<br />
          และเทคโนโลยี เอกวิทยาการ<br />
          คอมพิวเตอร์ GPAX 2.30
        </div>
        <div class="relative text-white text-[23px] mt-2 ml-9">
          <span class="flex items-center">
            <img
              :src="programImage"
              alt="Program Image"
              class="w-[30px] h-[30px] rounded-full relative mr-2"
            />
            <strong> โปรแกรมซอฟแวร์</strong>
          </span>
        </div>
        <div class="mt-1 ml-[75px]">
          <span class="flex items-center">
            <img
              :src="excelImage"
              alt="Exel Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="wordImage"
              alt="Word Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="powerpointImage"
              alt="Powerpoint Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
          </span>
        </div>
        <div class="mt-2 ml-[75px]">
          <span class="flex items-center">
            <img
              :src="limsImage"
              alt="lims Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="procreateImage"
              alt="Procreate Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="psImage"
              alt="Ps Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
          </span>
        </div>
        <div class="mt-2 ml-[75px]">
          <span class="flex items-center">
            <img
              :src="xamppImage"
              alt="Xampp Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="visualImage"
              alt="Visual Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
            <img
              :src="gitlabImage"
              alt="Gitlab Image"
              class="w-[40px] h-[40px] relative mr-4"
            />
          </span>
        </div>
        <div class="relative text-white text-[23px] mt-2 ml-9">
          <span class="flex items-center">
            <img
              :src="dataImage"
              alt="Data Image"
              class="w-[30px] h-[30px] relative mr-2"
            />
            <strong> ภาษาคอมพิวเตอร์</strong>
          </span>
        </div>
        <div class="text-white text-[18px] relative mt-1 ml-[75px]">
          php html css Javascript <br />
          Typescript vue node
        </div>
      </div>
      <div class="col-span-2 relative">
        <div
          class="w-[200px] h-[200px] bg-gradient-to-r from-[#d5eafd] via-[#e3edf8] to-[#fefeff] ml-4 rounded-bl-full absolute top-0 right-0"
          style="
            background: radial-gradient(
              circle at 20% 70%,
              #e6f2fd,
              #f7fafd,
              #fefeff
            );
          "
        ></div>
        <div
          class="w-[150px] h-[300px] bg-gradient-to-t from-[#d5eafd] via-[#e3edf8] to-[#ffffff] ml-4 mb-12 rounded-tl-full rounded-bl-full absolute bottom-0 right-0"
          style="
            background: radial-gradient(
              circle at 20% 90%,
              #e6f2fd,
              #f7fafd,
              #fefeff
            );
          "
        ></div>
        <h1 class="text-[40px] mt-20 text-[#406994] relative">
          <strong>รมย์ชลี เดือนแร่รัมย์</strong>
        </h1>
        <div
          class="w-[200px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-4 mt-4 rounded-full absolute"
        >
          <strong class="text-white text-[20px] ml-3">ประสบการณ์ทำงาน</strong>
        </div>
        <div class="flex items-start mt-14">
          <div
            class="w-[10px] h-[106px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-10 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>สิงหาคม 2024 - กันยายน 2024</strong><br />
            <strong class="ml-[5px]">ผู้ช่วยโปรแกรมเมอร์ งานโปรเจค</strong
            ><br />
            <ul class="list-disc ml-8">
              <li>ระบบติดตามโครงการรับเหมาก่อสร้าง</li>
              <li>เขียน frontend vue.js</li>
              <li>เขียน backend node expess prisma</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[140px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-28 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>มิถุนายน 2024 - สิงหาคม 2024</strong><br />
            <strong>บ.ประกันภัยไทยวิวัฒน์</strong><br />
            <strong>(consult บ.พีเพิลวัน contract 3 months)</strong><br />
            <strong class="ml-[5px]">ตำแหน่ง ผู้ช่วยธุรการ</strong><br />
            <ul class="list-disc ml-8">
              <li>ตรวจสอบงานเรียกร้องทรัพย์สินและสินไหม</li>
              <p>ที่ส่งมาทางไปรษณีย์</p>
              <li>แยกประเภท บันทึกรับเข้า</li>
              <li>ส่งเรื่องเสนอผู้บังคับบัญชา</li>
              <li>เตรียมเอกสารและส่งแผนกสารบรรณ</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[50px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>ตุลาคม 2023 - มิถุนายน 2024</strong><br />
            <ul class="list-disc ml-8">
              <li>ทำไร่นา อ้อย</li>
              <li>รับจ้างทั่วไป</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[260px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-20 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>กุมภาพันธ์ 2023 - ตุลาคม 2023</strong><br />
            <strong class="ml-[5px]"
              >บ.ยูเนี่ยน บันทึก คอร์เปอเรชั่น จำกัด</strong
            ><br />
            <strong class="ml-[5px]">ตำแหน่ง วิศวกรรมเคมี</strong>
            <br />
            <ul class="list-disc ml-8">
              <li>ตรวจรับวัตถุดิบรับเข้า และคงคลัง</li>
              <p>ลักษณะทางกายภาพ Viscosity geltime</p>
              <p>และวิเคราะห์ธาตุด้วย XRF ตามมาตรฐาน</p>
              <p>ASTM963_17,CONEG,EN71</p>
              <li>ทดสอบตัวอย่างด้วย colorimeter, QUV,</li>
              <p>Impact strength Test, Tensile</p>
              <p>strength Test และงานตามที่ได้รับมอบหมาย</p>
              <li>ทำรายงานและเอกสารภายในแผนก</li>
              <p>และแผนกอื่น ๆ ที่เกี่ยวข้อง</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="[830px] h-[20px]"></div>
    <div
      class="w-[827px] h-[1169px] border-2 border-slate-200 grid grid-cols-4 relative"
    >
      <div
        class="w-[827px] h-[300px] bg-gradient-to-t from-[#c0daf0] from-10% via-[#d2e4f4] via-40% to-[#ffffff] to-90% absolute bottom-0"
      ></div>
      <div class="col-span-2 relative">
        <div
          class="w-[150px] h-[150px] bg-gradient-to-r from-[#c1dbed] via-[#d0e3f4] to-[#dbe9f6] rounded-tr-full absolute bottom-0"
          style="
            background: radial-gradient(
              circle at 10% 50% 30%,
              #c1dbed,
              #d0e3f4,
              #dbe9f6
            );
          "
        ></div>
        <div class="mt-4"></div>
        <div
          class="w-[200px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-30% to-[#99c1e7] to-90% ml-5 mt-6 rounded-full absolute"
        >
          <strong class="text-white text-[20px] ml-4">ประสบการณ์ทำงาน</strong>
        </div>
        <div class="flex items-start mt-20 ml-4">
          <div
            class="w-[10px] h-[125px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-10 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>ธันวาคม 2022 - กุมภาพันธ์ 2023</strong><br />
            <strong>บ.สุรทิณฑ์ อินเตอร์เนชั่นแนล จำกัด</strong><br />
            <strong class="ml-[5px]">ตำแหน่ง พนักงานควบคุมคุณภาพ</strong><br />
            <ul class="list-disc ml-8">
              <li>ทดสอบความคงตัว (Viscosity)</li>
              <p>และลักษณะทางกายภาพของผลิตภัณฑ์</p>
              <li>ทำรายงาน COA</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6 ml-4">
          <div
            class="w-[10px] h-[140px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-28 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>เมษายน 2022 - ธันวาคม 2022</strong><br />
            <strong>บ.เอ็นไวรอนเมนท์ รีเสิร์ช แอนด์ </strong><br />
            <strong>เทคโนโลยี จำกัด</strong><br />
            <strong class="ml-[5px]">ตำแหน่ง เจ้าหน้าที่ปฏิบัติการ</strong
            ><br />
            <ul class="list-disc ml-8">
              <li>เตรียมสารละลาย และอุปกรณ์สำหรับเก็บ</li>
              <p>ตัวอย่างงานอากาศ</p>
              <li>วิเคราะห์ฝุ่นและสารเคมี จากสภาพพื้นที่</li>
              <p>การทำงาน และฝุ่นที่ระบายออกจากปล่อง</p>
              <li>ลงผลรายงาน ในระบบปฏิบัติการ LIMS</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6 ml-4">
          <div
            class="w-[10px] h-[53px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>มีนาคม 2020 - พฤษภาคม 2020</strong><br />
            <strong>บ.ชิโคนี่อิเล็กทรอนิกส์</strong><br />
            <div class="ml-[10px]">ตำแหน่ง พนักงานฝ่ายผลิต</div>
          </div>
        </div>
        <div class="flex items-start mt-6 ml-4">
          <div
            class="w-[10px] h-[53px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>เมษายน 2019 - พฤษภาคม 2019</strong><br />
            <strong>บ.อมกาซากิไพพ์</strong><br />
            <div class="ml-[10px]">ตำแหน่ง พนักงานฝ่ายผลิต</div>
          </div>
        </div>
        <div class="flex items-start mt-6 ml-4">
          <div
            class="w-[10px] h-[53px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>มีนาคม 2018 - สิงหาคม 2018 </strong><br />
            <strong>บ.อมกาซากิไพพ์</strong><br />
            <div class="ml-[10px]">ตำแหน่ง พนักงานฝ่ายผลิต</div>
          </div>
        </div>
      </div>
      <div class="col-span-2 relative">
        <div
          class="w-[200px] h-[200px] bg-gradient-to-r from-[#d5eafd] via-[#e3edf8] to-[#fefeff] ml-4 rounded-bl-full absolute top-0 right-0"
          style="
            background: radial-gradient(
              circle at 20% 70%,
              #e6f2fd,
              #f7fafd,
              #fefeff
            );
          "
        ></div>
        <div
          class="w-[150px] h-[300px] bg-gradient-to-t from-[#d5eafd] via-[#e3edf8] to-[#ffffff] ml-4 mb-12 rounded-tl-full rounded-bl-full absolute bottom-0 right-0"
          style="
            background: radial-gradient(
              circle at 20% 90%,
              #e6f2fd,
              #f7fafd,
              #fefeff
            );
          "
        ></div>
        <div
          class="w-[200px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-4 mt-10 rounded-full absolute"
        >
          <strong class="text-white text-[20px] ml-3">ประสบการณ์ฝึกงาน </strong>
        </div>
        <div class="flex items-start mt-20">
          <div
            class="w-[10px] h-[330px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-10 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>พฤศจิกายน 2021 - กุมภาพันธ์ 2022</strong><br />
            <strong>บ.อิสเทิร์นไทยคอนซัลติ้ง 1992 จำกัด</strong><br />
            <strong class="ml-[5px]"
              >ตำแหน่ง ผู้ช่วยเจ้าหน้าที่ปฏิบัติการ</strong
            ><br />
            <ul class="list-disc ml-8">
              <li>เตรียมสารละลาย ตัวอย่างน้ำดี และน้ำเสีย</li>
              <p>สำหรับวิเคราะห์สารประกอบในน้ำไซยาไนด์</p>
              <p>ฟีนอล ไนเตรทไนโตรเจน ไนไตรท์ไนโตรเจน</p>
              <p>ซัลเฟตโครเมียมเฮกซะวาเลนซ์ ซิลิกา</p>
              <p>ฟอสฟอรัส ฟลูออไรด์ ฟอร์มัลดีไฮด์ เซอร์แฟค</p>
              <p>แตนซ์ ด้วย UV-VIS Spectrophotometer</p>
              <li>วิเคราะห์ color และ color ADMI ด้วย</li>
              <p>Spectroquant</p>
              <li>วิเคราะห์ทางกายภาพ</li>
              <li>เตรียมตัวอย่างวิเคราะห์สารโลหะหนักในน้ำ</li>
            </ul>
          </div>
        </div>
        <div
          class="w-[150px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-4 mt-8 rounded-full absolute"
        >
          <strong class="text-white text-[20px] ml-3">การฝึกอบรม </strong>
        </div>
        <div class="flex items-start mt-20">
          <div
            class="w-[10px] h-[53px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-2 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>SRD CONSULTANT CO.,LTD (2023)</strong><br />

            <ul class="list-disc ml-8">
              <li>จป.ระดับหัวหน้างาน</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[50px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>บริษัท SGC (2023)</strong><br />
            <ul class="list-disc ml-8">
              <li>ภาวะผู้นำ ยุค 4.0</li>
              <li>การประชุมสุดยอด ISO 9001:2015</li>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[50px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>ศูนย์วิทยาศาสตร์เบทาโกร (2022)</strong><br />
            <ul class="list-disc ml-8">
              <li>การอ่านและตีความใบรายงานผลการสอบ</li>
              <p>เทียบ เครื่องมือด้านการวิเคราะห์</p>
            </ul>
          </div>
        </div>
        <div class="flex items-start mt-6">
          <div
            class="w-[10px] h-[50px] bg-gradient-to-t from-[#7cacdb] from-10% via-[#7cacdb] via-30% to-[#ffffff] to-90% mt-8 rounded-b-full relative"
          ></div>
          <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
            <strong>วิทยาศาสตร์บริการ E-learning </strong><br />
            <ul class="list-disc ml-8">
              <li>การควบคุมคุณภาพวิเคราะห์ผลการทดสอบ</li>
              <li>ข้อกำหนด ISO/IEC 17025:2017</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="[830px] h-[20px]"></div>
    <div class="w-[827px] h-[1169px] border-2 border-slate-200">
      <img
        :src="transcriptImage"
        alt="Transcript Image"
        class="w-[350px] h-[400px] mt-12 ml-20"
      />
    </div>
    <div class="[830px] h-[20px]"></div>
    <div class="w-[827px] h-[1169px] border-2 border-slate-200">
      <img
        :src="cerSQLImage"
        alt="CerSQL Image"
        class="w-[600px] h-[450px] mt-16 ml-[100px]"
      />
      <img
        :src="cerPHPImage"
        alt="CerPHP Image"
        class="w-[600px] h-[450px] mt-20 ml-[100px]"
      />
    </div>
    <div class="[830px] h-[20px]"></div>
    <div class="w-[827px] h-[1169px] border-2 border-slate-200 relative">
      <div class="mt-4"></div>
      <div
        class="w-[200px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-12 mt-6 rounded-full absolute"
      >
        <strong class="text-white text-[20px] ml-6">Project การเรียนรู้</strong>
      </div>
      <div class="flex items-start mt-20 ml-10">
        <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
          <strong>project php pdo mysql </strong><br />
          <strong class="ml-[30px]">หัวข้อ </strong> การบันทึกข้อมูลพนักงาน
          <br />
          <strong class="ml-[30px]"> คำอธิบาย </strong>ทำระบบ CRUD
          จัดการข้อมูลพนักงาน การเพิ่มข้อมูล แก้ไข ลบ <br />
          <strong class="ml-[30px]"> เทคโนโลยีที่ใช้ </strong>xampp , visual
          studio code <br />
          <strong class="ml-[30px]"> ภาษาที่ใช้ </strong>php html <br />
        </div>
      </div>
      <img
        :src="projectPHP1Image"
        alt="ProjectPHP1 Image"
        class="w-[450px] h-[120px] mt-1 ml-[100px]"
      />
      <img
        :src="projectPHP2Image"
        alt="ProjectPHP2 Image"
        class="w-[450px] h-[180px] ml-[100px]"
      />
      <img
        :src="projectPHP3Image"
        alt="ProjectPHP3 Image"
        class="w-[450px] h-[180px] ml-[100px]"
      />
      <div class="text-[#406994] text-[19px] mt-1 ml-[70px]">
        <strong>project CRUD-AJAX </strong><br />
        <strong class="ml-[30px]">หัวข้อ </strong> การบันทึกข้อมูลรายการหนัง
        <br />
        <strong class="ml-[30px]"> คำอธิบาย </strong>ทำระบบ CRUD
        จัดการข้อมูลรายการหนัง การเพิ่มข้อมูล แก้ไข ลบ <br />
        <strong class="ml-[30px]"> เทคโนโลยีที่ใช้ </strong>xampp , visual
        studio code
        <br />
        <strong class="ml-[30px]"> ภาษาที่ใช้ </strong>php html css<br />
      </div>
      <img
        :src="projectCrud1Image"
        alt="ProjectCrud1 Image"
        class="w-[500px] h-[200px] mt-1 ml-[100px]"
      />
    </div>
    <div class="[830px] h-[20px]"></div>
    <div class="w-[827px] h-[1169px] border-2 border-slate-200 relative">
      <div
        class="w-[200px] h-[30px] bg-gradient-to-r from-[#3b80c0] from-10% via-[#7cacdb] via-40% to-[#99c1e7] to-90% ml-12 mt-6 rounded-full absolute"
      >
        <strong class="text-white text-[20px] ml-6">Project การทำงาน</strong>
      </div>
      <div class="flex items-start mt-16 ml-10">
        <div class="text-[#406994] text-[19px] relative mt-1 ml-[30px]">
          <strong> ระบบติดตามโครงการรับเหมาก่อสร้าง </strong><br />
          <strong class="ml-[30px]"> คำอธิบาย </strong
          >พัฒนาเว็บระบบติดตามโครงการ โดยเพิ่มข้อมูล แก้ไข ลบ โครงการ ลูกค้า
          <p class="ml-[30px]">
            ผู้ใช้งาน และการส่งรายงานลูกค้า
            การส่งข้อมูลการดำเนินงานผ่านแอพพลิเคชั่นบนมือถือ
          </p>
          <p class="ml-[30px]">การส่งอนุมัติ การอนุมัติงาน แจ้งเตือนผ่านไลน์</p>
          <ul class="list-disc ml-16">
            <li>เขียน frontend vue.js</li>
            <li>เขียน backend node expess prisma</li>
          </ul>
        </div>
      </div>
      <img
        :src="projectCustomer1Image"
        alt="ProjectCustomer1 Image"
        class="w-[520px] h-[200px] mt-5 ml-[100px]"
      />
      <img
        :src="projectCustomer2Image"
        alt="ProjectCustomer2 Image"
        class="w-[520px] h-[250px] ml-[100px]"
      />
      <img
        :src="projectCustomer3Image"
        alt="ProjectCustomer3 Image"
        class="w-[620px] h-[240px] mt-10 ml-[100px]"
      />
    </div>
  </div>
</template>
