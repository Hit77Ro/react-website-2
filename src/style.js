const styles = {
  container: "max-w-[1400px] w-full  mx-auto px-10",
  heading2:
    "font-poppins font-semibold sm:text-[48px] text-[35px] text-black sm:leading-[76.8px] leading-[50.8px] w-full",
  paragraph:
    "font-poppins font-normal text-gray-600 text-[20px] leading-[30.8px]",

  sectionParagraph: "text-gray-500 font-poppins sm:text-[18px]  text-base",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6", // 64px
  paddingY: "sm:py-24 py-10",
  padding: "sm:px-16 px- sm:py-16 py-6",

  marginX: "sm:mx- mx-",
  marginY: "sm:my- my-",
};

export const layout = {
  section: `flex items-center justify-center  md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: ``,

  sectionImgReverse: ``,
  sectionImg: `flex-1 ${styles.flexCenter}`,

  sectionInfo: ` flex-col flex-1 ${styles.flexStart} `,
};

export default styles;
