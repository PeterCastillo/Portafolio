import { BtnCV, ContactoContainer, ContactoIntro, Info, IntroAboutInfo, IntroImg, IntroInfo } from "../style/contacto"
import { Title } from "../style/whatIDo"
import CV from "../assets/PeterCastillo_CV.pdf"

const Contacto = () => {
    return (
        <ContactoContainer>

            <ContactoIntro type={"row"}>
                <IntroImg>
                    <svg id="bf56719a-dd30-4b09-833f-7c41eeee086b" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1094 760"><title></title><rect x="155" y="304.52" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="291.81" y="344.05" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="428.63" y="383.57" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="155" y="245.24" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="291.81" y="284.76" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="428.63" y="324.29" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="580.64" y="304.52" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="717.45" y="344.05" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="854.27" y="383.57" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="580.64" y="245.24" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="717.45" y="284.76" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="854.27" y="324.29" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="155" y="166.19" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="291.81" y="205.71" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="428.63" y="245.24" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="155" y="106.9" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="291.81" y="146.43" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="428.63" y="185.95" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="580.64" y="166.19" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="717.45" y="205.71" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="854.27" y="245.24" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="580.64" y="106.9" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="717.45" y="146.43" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><rect x="854.27" y="185.95" width="130.73" height="39.52" rx="7.43" fill="#1955BC" opacity="0.1"></rect><ellipse cx="547" cy="660.5" rx="547" ry="99.5" fill="#1955BC" opacity="0.1"></ellipse><polygon points="240 321 194 603 402 581 393 557 500 230.5 570.5 268.5 320.5 240 321" fill="#292929"></polygon><polygon points="186 1 466 0 547 613 266 651 186 1" fill="#292929"></polygon><polygon points="216.5 24.5 442.5 24.5 521.5 594.5 288.5 626.5 216.5 24.5" fill="#fff"></polygon><path d="M482.64,638.86c1.42,2.72,2.48,5.66,4.33,8.11,5.4,7.22,15.65,8.35,23.34,13.06a2.15,2.15,0,0,1,.91.88c.35.83-.43,1.7-1.18,2.22-5.83,4.09-13.48,4.18-20.61,4.13a27.49,27.49,0,0,1-7.13-.68c-3.77-1-7-3.63-10.72-4.7a28.44,28.44,0,0,0-5.89-.83l-7.81-.53a18.41,18.41,0,0,1-6.09-1.13,6.16,6.16,0,0,1-3.84-4.55c-.22-1.66.49-3.27.91-4.89,1-3.84.69-8.48,3.68-11.1a11.35,11.35,0,0,1,4.15-2,132.39,132.39,0,0,1,16.61-4.42C477.93,631.52,480.59,634.92,482.64,638.86Z" transform="translate(-53 -70)" fill="#292929"></path><path d="M394.3,660.49c.2,2.13.26,4.57-1.28,6.06a6.83,6.83,0,0,1-3.35,1.5c-7.39,1.72-15.63,1.84-22.06-2.18a6.09,6.09,0,0,1-1.74-1.49,5.43,5.43,0,0,1-.88-2.75c-.23-2.83.64-5.62,1.43-8.35a146.52,146.52,0,0,0,4.25-19.75c.08-.55,18.87,3,20.12,4.86,1.57,2.3,1.58,7.82,2,10.56Q393.74,654.69,394.3,660.49Z" transform="translate(-53 -70)" fill="#292929"></path><path d="M464.24,400.27l5,46.49c1,9.5,2.05,19.05,1.36,28.58-.8,11-3.88,22-2.58,32.9.51,4.24,1.67,8.4,1.84,12.67a69,69,0,0,1-.43,8.5c-2.26,28.21,4.89,56.2,8.89,84.21a36.54,36.54,0,0,1,.42,10.48c-.52,3.55-1.56,8.21,1.6,9.89l-29.68,10.76c-3.79-4.75-1.28-12.14-2-18.17-.66-5.43-3.64-10.27-5.23-15.5-1.44-4.7-1.74-9.65-2.21-14.53-2.59-26.57-10.54-52.45-12.4-79.08a36,36,0,0,0-1-7.63c-1-3.31-3-6.2-4.46-9.31-2.24-4.67-3.34-9.79-4.42-14.85l-6.35-29.75c-6.42,9.56-6.16,22-7.43,33.46-1.78,16-5.76,31.73-9,47.53a94.47,94.47,0,0,0-1.69,10.3c-.84,9.27.83,18.63-.06,27.89-1,10.73-5.51,21.2-4.42,31.93.6,5.94,2.88,11.56,4.42,17.32s2.3,12.08-.05,17.57a54,54,0,0,0-25.71-2.84c-9.53-9.75-11.22-23.35-11.87-37s.92-27.32-.78-40.84c-.5-4-1.28-7.9-1.41-11.89-.42-12.79,5.73-24.76,8.79-37.19a78.7,78.7,0,0,0,.77-34.15c-1.5-7.47-4.08-14.72-5-22.29-1.25-10.61.87-21.3,3-31.78,1.43-7.07,2.85-14.14,4.47-21.17,1.74-7.55,3.81-15.26,8.46-21.44,7.44-9.89,20.65-14.28,33-13.32s23.88,6.58,34.08,13.58A128.48,128.48,0,0,1,464.24,400.27Z" transform="translate(-53 -70)" fill="#000000"></path><path d="M431.06,222.25a8.63,8.63,0,0,0-1.15,2.94c-.25,2.05,1,3.93,2,5.72a31.15,31.15,0,0,1,2.93,7.3,12,12,0,0,1,.43,4.87,11.75,11.75,0,0,1-1.3,3.5c-1.93,3.72-4.79,7.16-8.68,8.71a15.29,15.29,0,0,1-9.39.38,28.51,28.51,0,0,1-8.59-4.08,26.11,26.11,0,0,1-5.88-5.1,35.25,35.25,0,0,1-4.06-7c-2.08-4.35-4.19-9-3.81-13.77a4.6,4.6,0,0,1,.24-1.27,6.83,6.83,0,0,1,1.34-2,26.1,26.1,0,0,0,6.12-18.15l14.57,3.31c3.21.73,6.42,1.46,9.59,2.37,2.6.75,6.6,1.79,8.29,4.11S432.21,220.13,431.06,222.25Z" transform="translate(-53 -70)" fill="#fbbebe"></path><circle cx="370.26" cy="123.29" r="26.48" fill="#fbbebe"></circle><path d="M419,246.71c1.12-2.45,3.54-4,5.75-5.54s4.45-3.51,4.88-6.18a4.43,4.43,0,0,1,.44-1.74c.85-1.28,2.87-.64,4.08.3,2.94,2.29,4.94,5.54,6.89,8.71a74.43,74.43,0,0,1,6.45,12.19c2.81,7.41,3.15,15.5,3.46,23.41.28,7.2.55,14.51-1.2,21.49-1.1,4.42-3,8.71-3.11,13.26-.33,16.53-6.07,32.33-6.47,48.86a126.75,126.75,0,0,0,.72,14.31l.94,10.73q-21.81-1.25-43.5-3.83c-.42-4.94-1.83-9.73-3.12-14.51a314.93,314.93,0,0,1-10.11-59.74c-.77-10.72-1.56-21.4-2.75-32.08-1.07-9.71-3.17-19.48-1.91-29.17a40.27,40.27,0,0,1,4.1-12.62,8.32,8.32,0,0,1,3.2-3.83A8.65,8.65,0,0,1,390,230a41.94,41.94,0,0,1,6.88-.81,4.74,4.74,0,0,1,1.68.16,5.27,5.27,0,0,1,2.29,2.22A41.52,41.52,0,0,0,419,246.71Z" transform="translate(-53 -70)" fill="#f2f2f2"></path><path d="M406.72,244.59c1.86,2.66,5.8,3.29,7.52,6a15.73,15.73,0,0,1,1.31,3.57c1.05,3.35,3.17,6.26,4.46,9.53,1.86,4.7,1.91,9.9,1.93,14.95a49.47,49.47,0,0,1-.92,12c-.6,2.47-1.58,4.82-2.3,7.26a35.5,35.5,0,0,0-1.34,12.8,5.24,5.24,0,0,0,.72,2.65,5.75,5.75,0,0,0,2.56,1.74c2.93,1.29,6,2.61,9.2,2.31a3.37,3.37,0,0,0,1.83-.61,4.07,4.07,0,0,0,.9-1.19l2-3.38c1.81-3.09,3.7-6.55,3-10.08a20,20,0,0,0-2.27-5.17,60.78,60.78,0,0,1-3.26-8.07c-3.19-9.17-6.42-18.47-7.14-28.15a24.74,24.74,0,0,1,1.2-10.92,31.1,31.1,0,0,1,3.52-6.09,2.61,2.61,0,0,0-2.81-.95,16.72,16.72,0,0,0-2.91,1.21c-2.94,1.24-6.2.79-9.17-.06-1.16-.34-3-1.5-4.2-1.42C410.14,242.57,406.79,244.71,406.72,244.59Z" transform="translate(-53 -70)" fill="#1955BC"></path><path d="M430.13,244.48c-.6-.48-1.53-.92-2.06-.36a2.32,2.32,0,0,0-.38.81c-.52,1.4-2.05,2.09-3.44,2.63s-2.89.84-3.73-.19a2.26,2.26,0,0,1,.13-2.67,8.16,8.16,0,0,1,2.19-1.85,21.38,21.38,0,0,0,8.72-13.72,6.52,6.52,0,0,1,2.39,4.13c.33,1.59.37,3.23.7,4.82.49,2.28,1.58,4.41,1.83,6.72.13,1.23,0,2.47,0,3.7a22.71,22.71,0,0,0,.42,3.58C434.56,249.6,432.91,246.69,430.13,244.48Z" transform="translate(-53 -70)" fill="#f2f2f2"></path><path d="M409.89,237.69c-1-.95-2-1.85-3-2.82a38.9,38.9,0,0,1-9.67-15.35c-1.28,1-2.69,2.32-2.72,4a6.13,6.13,0,0,0,1.32,3.25,50.68,50.68,0,0,1,7.33,19.61,5.84,5.84,0,0,1,5.05-2.69c1.58,0,8.67,4.2,9.18,3.14C418.13,245.17,411.09,238.82,409.89,237.69Z" transform="translate(-53 -70)" fill="#f2f2f2"></path><path d="M432.22,229.73a83,83,0,0,0,33.58,20.33,7.54,7.54,0,0,1,3.39,1.72,6.93,6.93,0,0,1,1.41,3.1c2.44,9.54,3.26,19.41,4.07,29.22a16.28,16.28,0,0,1-.1,4.88c-.59,2.62-2.45,4.74-4.28,6.71-5.74,6.15-12.29,12.58-13.26,20.94a33.45,33.45,0,0,1-.57,4.8c-.5,1.86-1.61,3.5-2.29,5.31-3.34,8.91,4.21,19.7-.39,28A50.54,50.54,0,0,1,458.84,370a19.86,19.86,0,0,0,1.37,5.88c1.37,2.86,4.19,4.68,6.41,7,6.77,6.94,7.6,17.56,8,27.25.25,5.46.17,11.73-4,15.31-2.41,2.09-5.7,2.77-8.85,3.29-4.19.7-8.75,1.2-12.46-.87-2.66-1.48-4.47-4.07-6.2-6.57-3.28-4.77-6.57-9.53-9.68-14.42-4.92-7.71-9.56-16.52-8.14-25.56-.4,9.25-2.35,18.57-6.89,26.63s-11.85,14.79-20.72,17.45-19.24.78-25.85-5.7a34.94,34.94,0,0,1-5.51-7.43,72.52,72.52,0,0,1-8.14-20.71c-.43-1.89-.75-4,.2-5.69.45-.8,1.14-1.43,1.61-2.22,1.58-2.69.06-6.08-1.47-8.82-2.33.22-4-2.52-3.79-4.86s1.61-4.37,2.6-6.5c2.9-6.28,2.26-13.59.86-20.36s-3.49-13.5-3.33-20.41c.17-7.31-5.09-13.89-9.1-20-2.24-3.44-4.85-6.64-6.8-10.25a33.07,33.07,0,0,1-2.62-24.76,64.89,64.89,0,0,1,5.48-12.22l3.3-6.19a10.21,10.21,0,0,1,7-6l22.83-9a34.35,34.35,0,0,0,8.24-4.12c2.79-2.1,4.87-5,7.53-7.24a4.22,4.22,0,0,1,3-1.31c2.14.19,2.9,2.89,3.12,5,.5,4.72,4,8.72,5.19,13.31,6.44,25.35,20.07,48.73,23.81,74.61,4.2-10.09,8.4-20.2,13.78-29.7a24.66,24.66,0,0,0,2.13-4.31,18.4,18.4,0,0,0,.71-6.69c-.27-6.51-2-12.87-3.71-19.16C436.53,246.1,434.53,238.21,432.22,229.73Z" transform="translate(-53 -70)" fill="#292929"></path><path d="M475.73,307.19c.44,4.26.87,8.53,1.66,12.74.92,4.87,2.32,9.63,3.71,14.39a37.45,37.45,0,0,0,2.9,7.73,9.94,9.94,0,0,1,1.07,2.29c.49,2-.63,4-1.11,6-1.44,6,2.88,12.67.16,18.2-.82,1.68-2.25,3.07-2.79,4.87-.63,2.07,0,4.28.33,6.42.85,6-1.2,12.1-3.22,17.87L475,407.44c-3.14-5.84-6.31-11.74-10.65-16.75-1.55-1.8-3.24-3.47-4.67-5.37a37.66,37.66,0,0,1-5-9.74,84.43,84.43,0,0,1-5.17-25.72,17.59,17.59,0,0,1,.85-7.4,39.36,39.36,0,0,1,2.22-4c2.68-4.83,3.23-10.55,3.18-16.07s-.64-11.06,0-16.55a37.86,37.86,0,0,1,4-13.13,18.63,18.63,0,0,1,5.43-6.77,9.78,9.78,0,0,1,6-1.95c3.27.19,2.52,3,2.8,5.71Z" transform="translate(-53 -70)" fill="#292929"></path><path d="M328.64,293.58q-3.06,9-5.52,18.16-2.4,9-4.29,18.1a38.76,38.76,0,0,0-1.08,8.14,36.42,36.42,0,0,0,1.63,9.41c6.44,23.21,18.18,44.62,31.4,64.75A58.28,58.28,0,0,1,364.08,400a2.85,2.85,0,0,0,1-1,2.71,2.71,0,0,0-.32-2.34c-3.65-7.48-9.43-14.07-11.25-22.2-.76-3.38-.79-6.9-1.65-10.26-1.11-4.35-3.59-8.33-4.16-12.79-.61-4.86,1-10.16-1.28-14.47,4.65-1.81,7.34-6.6,9.31-11.19a61.29,61.29,0,0,0,4.48-14.71,44.26,44.26,0,0,0-5.41-28.15,45,45,0,0,0-9.05-11.36c-1.19-1.07-4-4.14-5.73-4.11-2.31.05-3.05,3.79-3.71,5.47C333.64,279.75,331,286.62,328.64,293.58Z" transform="translate(-53 -70)" fill="#292929"></path><path d="M370.06,405.51c.3.22.64.52.56.88s-.37.45-.63.6a7.76,7.76,0,0,0-2.88,3.9,108.85,108.85,0,0,0-4.34,11.49,50.37,50.37,0,0,0-7.84-9.15c-2.28-2.1-4.83-4.09-6.05-6.93,0-.08,5.24-3.95,5.72-4.37,1.47-1.31,3.32-4.94,4.84-5.74,1.72-.9,3.36,2.63,4.67,4.05A39.72,39.72,0,0,0,370.06,405.51Z" transform="translate(-53 -70)" fill="#fbbebe"></path><path d="M451.38,189.15c-.07-1.31-.24-2.76-1.24-3.61a4.73,4.73,0,0,0-3-.83c-5.83-.19-11.86.79-17.36-1.17-3.62-1.29-6.71-3.77-10.24-5.31s-8.05-1.95-10.9.64c-2.16,2-2.75,5.07-3.5,7.9a46.32,46.32,0,0,1-8.63,17.12c-2.71-.84-4.65-3.26-5.9-5.8-4.25-8.66-2.16-19,.86-28.18,1-3.08,2.11-6.13,3.22-9.17l2.44-6.72a13.12,13.12,0,0,0,8.36-4.16l1.05,2.55a13.3,13.3,0,0,0,7.5-2.65c.84,1.58,3,2,4.75,1.49s3.26-1.49,5-2c4.65-1.5,9.61.81,14.49,1.07a58,58,0,0,1,6.19.18c5.76.93,9.83,6.35,11.59,11.91,1.17,3.7,2.14,8.25,5.79,9.56.08,1.4-2.4,1.67-2.61,3a2.3,2.3,0,0,0,.3,1.27l3.35,7.19a8.32,8.32,0,0,1-4.84-.24C456.54,186.74,451.53,191.86,451.38,189.15Z" transform="translate(-53 -70)" fill="#000000"></path><path d="M621.14,204.8a131.36,131.36,0,0,1,4,16.73c.72,4.24,1.14,8.95-1.29,12.49,9.26-13.93,18.93-28.28,33-37.27A30.13,30.13,0,0,1,649,173.51c.08-.84-11.55,3.55-12.44,4.05-4.08,2.27-7.82,5.09-11.8,7.52-2.06,1.25-10.64,4.21-10.72,6,0,1.15,3.41,4.67,4.05,5.88A45.67,45.67,0,0,1,621.14,204.8Z" transform="translate(-53 -70)" fill="#fbbebe"></path><path d="M664.17,730.18a15.5,15.5,0,0,0-15.84-1.2c-4.53,2.34-7.58,6.77-11.7,9.77-7.08,5.14-16.43,5.55-24.72,8.33-2.2.74-4.54,1.84-5.47,4a7.1,7.1,0,0,0,.41,5.57,14.42,14.42,0,0,0,6.86,7.07c3.72,1.78,8,1.86,12.12,1.91l35.8.42c11,.13,22.07.26,33,1.63,2.55.32,5.31.67,7.56-.58,3.66-2,4.08-7.06,3.8-11.23a103.07,103.07,0,0,0-7-30.8c-.43-1.09-1-2.33-2.21-2.53a3.6,3.6,0,0,0-2.38.76c-10.1,6-22.89,9.39-33.63,4.59" transform="translate(-53 -70)" fill="#f5f5f5"></path><path d="M682.09,501.78c-4,23.23-1.39,47.1,3.11,70.23a122.46,122.46,0,0,0,3.27,13.64c1.61,5.1,3.78,10,5.29,15.13,3.84,13,3.3,26.9,2.73,40.47L693.87,703c-.22,5.18-.42,10.48,1.14,15.42.63,2,1.4,4.5-.19,5.85a4.46,4.46,0,0,1-2.11.81,32.66,32.66,0,0,1-21-3.15L671,659.55c-.22-19.23-.45-38.54-3.41-57.53-2.35-15.1-6.43-30-6.7-45.28-.28-16,3.64-31.79,7.64-47.3.86-3.32,4-5.75,6.58-8a8.09,8.09,0,0,1,3.2-1.94C679.51,499.17,681.35,500.77,682.09,501.78Z" transform="translate(-53 -70)" fill="#f5f5f5"></path><path d="M682.09,501.78c-4,23.23-1.39,47.1,3.11,70.23a122.46,122.46,0,0,0,3.27,13.64c1.61,5.1,3.78,10,5.29,15.13,3.84,13,3.3,26.9,2.73,40.47L693.87,703c-.22,5.18-.42,10.48,1.14,15.42.63,2,1.4,4.5-.19,5.85a4.46,4.46,0,0,1-2.11.81,32.66,32.66,0,0,1-21-3.15L671,659.55c-.22-19.23-.45-38.54-3.41-57.53-2.35-15.1-6.43-30-6.7-45.28-.28-16,3.64-31.79,7.64-47.3.86-3.32,4-5.75,6.58-8a8.09,8.09,0,0,1,3.2-1.94C679.51,499.17,681.35,500.77,682.09,501.78Z" transform="translate(-53 -70)" opacity="0.1"></path><path d="M607,429.18c-1.48,6.09,1.66,12.4,1.31,18.66-.2,3.79-1.69,7.57-1,11.29s3.35,6.52,4.77,9.93a26.94,26.94,0,0,1,1.62,8.88c.41,7.48.08,15-.2,22.45-.47,12.5-.82,25.07.83,37.46A117.19,117.19,0,0,0,623,569a54,54,0,0,1,3.23,8.39,59.88,59.88,0,0,1,1.1,8.14,82.7,82.7,0,0,0,7.07,25.71c2.55,5.57,7,10,8.41,15.91,1.34,5.66.44,11.63,1.41,17.36.71,4.25,2.44,8.27,3.4,12.47,1.25,5.43,1.22,11.06,1.85,16.6,1.8,16,9.07,32,4.73,47.52-.87,3.12-2.22,6.29-1.61,9.47.3,1.56,1.06,3.1.72,4.65-.28,1.32-1.3,2.34-1.82,3.59-1,2.34.06,5.12,1.84,6.93a19.69,19.69,0,0,0,6.5,3.84c7.37,3.15,15,6.35,23,6.28a6.18,6.18,0,0,0,2.83-.52c1.44-.75,2.15-2.38,2.76-3.88l4.1-10.14c.5-1.23,1-2.67.31-3.81a7.1,7.1,0,0,0-1.72-1.6c-3.31-2.79-2.56-8-1.68-12.19a177.87,177.87,0,0,0,3.72-32.7c.44-21.92-3.17-43.71-6.77-65.34-1.25-7.51-2.51-15.07-5-22.27s-6.16-14.13-5.56-21.61c.64-8.08-1.46-16.55,0-24.52s3.77-15.77,5.26-23.73c1.93-10.33,2.41-20.86,3-31.34.25-4.28.57-8.7,2.57-12.5,1.17-2.22,2.87-4.12,4.18-6.27,3.38-5.59,3.92-12.52,7.15-18.2,1.53-2.69,3.64-5.06,4.76-7.94a22.19,22.19,0,0,0,1.22-7.06,84,84,0,0,0-1-18.05,117.45,117.45,0,0,0-55-12.76c-7.31.12-14.7.86-21.56,3.39C619.86,425.25,613.9,428.66,607,429.18Z" transform="translate(-53 -70)" fill="#f5f5f5"></path><path d="M648,746c-2.94,3.66-2.74,8.89-4.62,13.2-2.28,5.23-7.36,8.58-12.18,11.63l-30,19c-1.64,1-3.4,2.23-4,4.09a6.56,6.56,0,0,0,.15,3.59,15.58,15.58,0,0,0,10.48,10.64,31,31,0,0,0,8.11.83l13.49.18a79,79,0,0,0,12.31-.48c3.74-.54,7.38-1.61,11.1-2.29,6.77-1.23,13.73-1.12,20.51-2.31a108.46,108.46,0,0,0,12.28-3.17c4.9-1.47,9.89-3,14.09-5.91a7.31,7.31,0,0,0,2.71-2.92c.71-1.65.32-3.54-.08-5.29l-6.44-28.3a16.87,16.87,0,0,0-2.52-6.61c-1.43-1.9-4-3.16-6.23-2.35a13.21,13.21,0,0,0-2.59,1.56c-3.3,2.17-7.53,2.53-11.43,1.85-2.52-.45-5.85-1.14-7.88-2.81-1.54-1.27-2-3.24-3.31-4.68A9.39,9.39,0,0,0,648,746Z" transform="translate(-53 -70)" fill="#f5f5f5"></path><circle cx="575.55" cy="94.77" r="36.13" fill="#fbbebe"></circle><path d="M600.68,166.89c3.46-1.94,3.46-7.53,7-9.39s7.56,1.37,9.83,4.63A42.59,42.59,0,0,1,624.26,178c.32,1.62.62,3.39,1.84,4.52s2.82,1.27,4.38,1.43q6.85.68,13.72,1.24c5.1.41,10.48.74,15.11-1.45a11,11,0,0,0,4.54-3.76,16.92,16.92,0,0,0,1.94-5.08c2.39-9.09,4.8-18.29,5-27.69.08-3.88-.26-7.9-2.13-11.3-1.09-2-2.69-3.74-3.14-5.94s1-5,3.28-4.76a13.46,13.46,0,0,1-6-1.14c-1.81-1-3.15-3.15-2.51-5.11-5.08.65-8.78-4.37-12.74-7.62a3.45,3.45,0,0,0-2.42-1,8.73,8.73,0,0,0-2,.77c-2,.7-4.09-.63-6.14-1.21-5.5-1.54-12.49,2.18-16.57-1.82.39,2.55-2.74,4.26-5.32,4.21s-5.24-1-7.68-.14a5,5,0,0,1-2.86,7.16l1.21,2.64a6.82,6.82,0,0,0-5.25,4.92c-1.33,5.25-1,12.71-.68,18.11C600,147.35,602.31,166,600.68,166.89Z" transform="translate(-53 -70)" fill="#000000"></path><path d="M631.51,211.34c-18.15,20.41-22.77,49.14-26.64,76.19l-5.7,39.94c-1.48,10.36-3,20.72-4.29,31.11-.9,7.11-1.74,14.33-.76,21.43.77,5.6,2.64,11,4.2,16.39a154.56,154.56,0,0,1,6,43.49c1.21-3.56,5.4-5,9.08-5.8a146.82,146.82,0,0,1,91.86,9.81c5.05-14.15,4.1-29.63,5.51-44.59,2-21.33,8.89-42,10.93-63.29.75-7.93.84-15.9.92-23.87.06-5.85.12-11.76-1.1-17.49-1.36-6.34-4.23-12.25-7.2-18A469.1,469.1,0,0,0,687,230.24q-7.54-11.28-15.73-22.11-4.15-5.49-8.47-10.86c-2.79-3.47-4-6.48-8.43-4.4C646,196.79,637.6,204.49,631.51,211.34Z" transform="translate(-53 -70)" fill="#1955BC"></path><path d="M641.91,381.22a98,98,0,0,1-13.27-.42c-3.27-.32-6.61-.8-9.8,0a10.2,10.2,0,0,0-3.81,1.87,2.87,2.87,0,0,0,1.63,5l3.42.3c2.17.19,4.43.41,6.12,2a3.82,3.82,0,0,1,1.24,2.41c.21,2.33-1.81,3.6-3.62,4.57a28.69,28.69,0,0,0-7.06,4.7,9.78,9.78,0,0,0-2.93,6,1.16,1.16,0,0,0,1.7,1.07c4-2,6.61-7.93,11-6.94a17.82,17.82,0,0,0-9.66,7.43,4.48,4.48,0,0,0,6,6.33,19.78,19.78,0,0,0,1.88-1.25,46.21,46.21,0,0,0,7.93-8.24c-3.2,6.75-6.44,14.65-2.76,21.36a2.13,2.13,0,0,0,2,1.18c1.16-.12,1.5-1.21,1.69-2.17.6-3.09.75-6.35,2.27-9.1,3.52-6.38,12.2-7,18.81-10.11,7.93-3.68,13.36-11.6,15.55-20.06a15.42,15.42,0,0,0,.39-7.62c-1.47-5.69-8.49-7-13-4.25C652.1,378.79,648.89,381,641.91,381.22Z" transform="translate(-53 -70)" fill="#fbbebe"></path><path d="M634.89,269.29c7,10.81,19.15,16.9,29.57,24.49A24.79,24.79,0,0,1,671,300c2.63,4.06,3,9.22,2.46,14-.68,6.31-2.71,12.38-4.72,18.4l-4.37,13.05c-2.77,8.28-5.63,16.73-10.9,23.69-1.35,1.77-2.92,3.66-2.86,5.88a7.6,7.6,0,0,0,1.28,3.58,24.08,24.08,0,0,0,15.29,10.92,11.66,11.66,0,0,0,5.75,0c2.7-.8,4.73-3,6.61-5.08,9-9.93,18-20,24.5-31.65,6.35-11.37,10.15-24,13.65-36.51a76.86,76.86,0,0,0,3-14.13c.74-9-1.62-18-5.48-26.13s-9.17-15.49-14.64-22.64a157.58,157.58,0,0,0-17.15-19.68c-10.88-10.17-24.19-16.15-38.75-10.38-10.28,4.08-14.13,12.59-15.05,23.49A35.74,35.74,0,0,0,634.89,269.29Z" transform="translate(-53 -70)" opacity="0.1"></path><path d="M638.53,266.55c7,10.81,19.16,16.9,29.57,24.49a24.87,24.87,0,0,1,6.51,6.26c2.63,4.06,3,9.21,2.46,14-.69,6.31-2.71,12.38-4.73,18.4l-4.37,13c-2.77,8.28-5.63,16.72-10.9,23.69-1.34,1.77-2.91,3.65-2.85,5.88a7.42,7.42,0,0,0,1.28,3.57,24.07,24.07,0,0,0,15.28,10.93,11.7,11.7,0,0,0,5.76,0c2.7-.79,4.72-3,6.61-5.07,9-9.94,18-20,24.5-31.65,6.35-11.37,10.15-24,13.65-36.52a76.08,76.08,0,0,0,3-14.12c.74-9-1.62-18-5.47-26.14s-9.17-15.49-14.64-22.64A157.65,157.65,0,0,0,687,231.06c-10.87-10.16-24.18-16.15-38.74-10.37-10.29,4.08-14.13,12.58-15.06,23.49A35.77,35.77,0,0,0,638.53,266.55Z" transform="translate(-53 -70)" fill="#1955BC"></path><path d="M859.65,625.24a37,37,0,0,1-.8,7.76c-.1.48-.21,1-.32,1.41-2.84,11.39-10.85,19.72-20.41,20.25-.32,0-.64,0-1,0-10.11,0-18.66-8.72-21.48-20.73-.08-.32-.15-.64-.22-1a37,37,0,0,1-.8-7.76c0-16.27,10.07-29.45,22.5-29.45S859.65,609,859.65,625.24Z" transform="translate(-53 -70)" fill="#f5f5f5"></path><path d="M859.65,625.24a37,37,0,0,1-.8,7.76c-.1.48-.21,1-.32,1.41-.34,0-.67,0-1,0a45.76,45.76,0,0,1-7.36-1,44.92,44.92,0,0,1-6.56,1.5,45.87,45.87,0,0,1-5.14.48l-1.74,0a46.41,46.41,0,0,1-6.16-.41,45.17,45.17,0,0,1-9.67-2.4,45.56,45.56,0,0,1-5.22,1.4c-.08-.32-.15-.64-.22-1a37,37,0,0,1-.8-7.76c0-16.27,10.07-29.45,22.5-29.45S859.65,609,859.65,625.24Z" transform="translate(-53 -70)" opacity="0.1"></path><path d="M907.65,570.38a45.54,45.54,0,0,0-4.9-20.61L876.29,558l23.23-13.66a45.73,45.73,0,0,0-34.36-19.58,45.65,45.65,0,0,0-3.57-4.72l-38,11.83,31.17-18.33a45.73,45.73,0,0,0-72,24.39l32.55,37.47L780,549.86a45.74,45.74,0,0,0,40.93,80.7,45.92,45.92,0,0,0,29.28.81,45.78,45.78,0,0,0,55.62-44.66c0-1,0-2-.1-3A45.63,45.63,0,0,0,907.65,570.38Z" transform="translate(-53 -70)" fill="#1955BC"></path><path d="M906.86,578.86a121.9,121.9,0,0,0-42.34-.54c-15.89,2.63-32.13,8.41-47.67,4.19-9.12-2.48-17-8.22-25.91-11.41a49.18,49.18,0,0,0-26.75-1.6,45.76,45.76,0,0,0,56.69,61.06,45.92,45.92,0,0,0,29.28.81,45.78,45.78,0,0,0,55.62-44.66c0-1,0-2-.1-3A45.19,45.19,0,0,0,906.86,578.86Z" transform="translate(-53 -70)" opacity="0.1"></path></svg>
                </IntroImg>
                <IntroInfo>
                    <Title>Contactame</Title>
                    <Info>
                        Puedes contactarme por cualquieras de los medios mencionados abajo. Tratare de resposnderte tan pronto como sea posible. Estaria encantado de recibir cualquier sujerencia. 
                    </Info>
                    <BtnCV download={"PeterCastillo_CV"} href={CV}>Descargar CV</BtnCV>
                </IntroInfo>
            </ContactoIntro>

            <ContactoIntro type={"row-reverse"}>
                <IntroImg>
                    <svg id="b4ce20e6-8fe7-43d5-87f7-68602c562594" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1061 742.85506"><title></title><path d="M1118.5,516.01425c0,103.85867-61.74233,140.12223-137.90535,140.12223S842.68931,619.87292,842.68931,516.01425,980.59465,280.031,980.59465,280.031,1118.5,412.15559,1118.5,516.01425Z" transform="translate(-69.5 -78.57247)" fill="#7F8DAA"></path><polygon points="906.071 561.677 907.483 474.756 966.262 367.224 907.705 461.121 908.34 422.038 948.85 344.239 908.508 411.696 908.508 411.696 909.649 341.403 953.029 279.466 909.829 330.35 910.543 201.459 906.059 372.087 906.427 365.048 862.323 297.54 905.72 378.561 901.61 457.065 901.488 454.981 850.644 383.939 901.334 462.343 900.82 472.16 900.728 472.308 900.77 473.114 890.344 672.287 904.274 672.287 905.945 569.41 956.511 491.199 906.071 561.677" fill="#f5f5f5"></polygon><path d="M831.65688,421.48618c0,134.32387-79.85341,181.22475-178.35758,181.22475S474.94172,555.81005,474.94172,421.48618s178.35758-305.205,178.35758-305.205S831.65688,287.16231,831.65688,421.48618Z" transform="translate(-69.5 -78.57247)" fill="#7F8DAA"></path><polygon points="577.302 503.591 579.128 391.174 655.149 252.098 579.415 373.539 580.236 322.992 632.629 222.372 580.453 309.615 580.453 309.616 581.93 218.704 638.034 138.598 582.162 204.408 583.085 37.709 577.286 258.389 577.763 249.285 520.722 161.975 576.848 266.761 571.533 368.293 571.375 365.598 505.617 273.717 571.176 375.119 570.511 387.817 570.392 388.008 570.446 389.05 556.962 646.647 574.978 646.647 577.14 513.593 642.538 412.44 577.302 503.591" fill="#f5f5f5"></polygon><path d="M1107.47,769.93754c0,10.11-29.37988,19.55-80.13995,27.5-91.98,14.42-254.15,23.99-438.85,23.99-286.62,0-518.98-23.05-518.98-51.49,0-3.93,4.46-7.78,12.91-11.46,9.53-4.17,24.15-8.14,43.17005-11.85,39.21-7.65,97.13995-14.19,167.8-19.05,82.02-5.62994,181.21-8.98,288.21-9.11q3.435-.015,6.88995-.01,19.335,0,38.33.14,8.925.06006,17.77.16c63.02.67,122.66,2.46,176.86,5.16,2.42.12,4.83.25,7.23.37.82.04,1.64.09,2.46.13.22.01.44.02.66.04q15.975.84,31.25,1.79,5.01.3,9.93.63c31.87006,2.07,61.29,4.48,87.75,7.19q6.78.68994,13.30005,1.41c33.48,3.67,61.66992,7.84,83.38989,12.37C1089.51,754.53751,1107.47,762.0275,1107.47,769.93754Z" transform="translate(-69.5 -78.57247)" fill="#f5f5f5"></path><ellipse cx="752.96319" cy="688.14768" rx="113.08238" ry="26.20202" opacity="0.1"></ellipse><path d="M1107.47,769.93754c0,10.11-29.37988,19.55-80.13995,27.5-38.38-4.19-64.95-13.24-64.95-23.72,0-13.05,41.16-23.87,95.02991-25.87C1089.51,754.53751,1107.47,762.0275,1107.47,769.93754Z" transform="translate(-69.5 -78.57247)" opacity="0.1"></path><path d="M632.15381,757.98614c0,17.26572-123.07592,31.25855-274.89132,31.25855-150.39039,0-272.5745-13.72617-274.85457-30.77131,29.19-12.74244,106.04-23.683,210.96763-30.9,20.50191-.5516,41.89565-.8458,63.88694-.8458C509.07789,726.7276,632.15381,740.72037,632.15381,757.98614Z" transform="translate(-69.5 -78.57247)" opacity="0.1"></path><rect x="56.08151" width="456.00701" height="683.09115" fill="#f5f5f5"></rect><rect x="83.66258" y="237.1972" width="428.42594" height="209.61613" fill="#7F8DAA"></rect><rect x="256.50394" y="241.79404" width="423.8291" height="199.50307" fill="#f5f5f5"></rect><rect x="282.47612" y="271.21385" width="94.695" height="34.01665" fill="#1955BC"></rect><rect x="305.92003" y="330.97283" width="348.44084" height="9.19369" fill="#1955BC"></rect><rect x="305.92003" y="354.87642" width="348.44084" height="9.19369" fill="#1955BC"></rect><rect x="305.92003" y="378.78002" width="348.44084" height="9.19369" fill="#1955BC"></rect><rect x="305.92003" y="402.68361" width="348.44084" height="9.19369" fill="#1955BC"></rect><rect x="86.42068" y="77.22699" width="94.695" height="34.01665" fill="#7F8DAA"></rect><rect x="109.86459" y="136.98598" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="109.86459" y="160.88957" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="109.86459" y="184.79316" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="109.86459" y="208.69676" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="90.09816" y="467.95881" width="94.695" height="34.01665" fill="#7F8DAA"></rect><rect x="113.54207" y="527.71779" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="113.54207" y="551.62138" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="113.54207" y="575.52498" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><rect x="113.54207" y="599.42857" width="348.44084" height="9.19369" fill="#7F8DAA"></rect><path d="M792.56281,219.0309s18.90356,24.22018,16.54061,41.35153S848.092,236.753,848.092,236.753s-14.17767-29.53681-6.4981-43.71448S792.56281,219.0309,792.56281,219.0309Z" transform="translate(-69.5 -78.57247)" fill="#F7B799"></path><path d="M858.72526,709.34191s24.81092,27.17386,20.67577,33.08122-76.7957,28.35533-85.066,27.17386-12.40546-7.08883-9.45178-8.861,21.85724-11.81472,21.85724-11.81472l15.94988-18.31282s11.81472-6.4981,11.81472-10.04252S858.72526,709.34191,858.72526,709.34191Z" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M816.783,739.46945s-9.45177,15.35914-11.224,15.94988,8.861,21.85723,8.861,21.85723L839.231,769.597l13.58693-11.224-2.95368-15.35914Z" transform="translate(-69.5 -78.57247)" fill="#F7B799"></path><path d="M791.38134,446.46432l-11.81472,52.57552s-40.7608,91.5641-12.40546,107.514l62.02729,118.738,33.08123-14.7684-55.5292-121.69165,25.40165-140.00447Z" transform="translate(-69.5 -78.57247)" fill="#d0cde1"></path><path d="M791.38134,446.46432l-11.81472,52.57552s-40.7608,91.5641-12.40546,107.514l62.02729,118.738,33.08123-14.7684-55.5292-121.69165,25.40165-140.00447Z" transform="translate(-69.5 -78.57247)" opacity="0.1"></path><path d="M795.51649,454.73463h-5.99365a333.982,333.982,0,0,0,3.04,54.34772c4.13515,30.12754,14.76841,99.24367,14.76841,99.24367s-1.18148,12.9962,2.36294,17.13135,4.13515-1.18147,4.72589,8.27031,6.20273,75.167,6.20273,75.167,3.83978,13.44347-.29537,16.39715-12.40546,18.90356-6.4981,21.2665,46.66816,5.31663,48.44037,3.54442,0-112.8306,0-112.8306-1.18148-22.448-2.36295-23.62945-6.4981-17.13135-4.72589-20.67577.59074-14.17766.59074-15.94987-5.31663,0-.59074-7.67957,5.31663-69.11613,5.31663-69.11613,25.40165-38.98859,17.72208-49.0311Z" transform="translate(-69.5 -78.57247)" fill="#f5f5f5"></path><circle cx="739.60342" cy="110.33089" r="38.98859" fill="#F7B799"></circle><path d="M848.092,230.25489s-23.62945,5.90736-33.08122,20.085l-8.27031,1.77221v8.2703s-15.35914,49.0311-11.81472,70.2976,0,62.618-5.90737,73.842-7.67957,13.58693-4.72588,18.31282,7.08883,20.67577,4.13515,27.7646,0,14.17767,27.17386,15.94988,65.57171,1.77221,65.57171-7.67957-2.36294-36.03491,0-43.12374,3.54442-11.81472,2.36295-18.31282,2.36294-79.15864,2.36294-79.15864S886.48986,245.614,848.092,230.25489Z" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M792.56281,412.79236l-32.49049,48.44036s-34.26269,31.309-21.85723,45.48669S783.111,465.36788,783.111,465.36788l35.44417-40.17006Z" transform="translate(-69.5 -78.57247)" fill="#F7B799"></path><path d="M813.23858,758.373s-1.18148-7.67957-5.31663-7.67957S776.0222,769.597,776.0222,769.597s-36.62564,4.13516-22.448,11.81473,101.01588,8.861,101.60661,5.90736,1.77221-32.08116-2.36294-31.99046-37.21638,6.5888-37.21638,6.5888Z" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M811.87686,168.76089a9.77913,9.77913,0,0,1-4.45607,1.00684c-1.59349.09057-3.49555-.008-4.343-1.36045a6.221,6.221,0,0,1-.54225-2.837,9.34634,9.34634,0,0,0-10.92238-7.96043,13.44458,13.44458,0,0,0,1.74051,5.54339,11.85549,11.85549,0,0,1-10.42222-1.38722l-.60006,7.95737c-2.1192,1.01275-4.834,1.224-6.68211-.2255s-1.99585-4.85139.09446-5.9225c-2.582-.5384-5.73992-1.69522-5.92989-4.32593-.17333-2.40039,2.37513-4.15727,2.84437-6.51772.38272-1.92518-.6727-4.01766.07418-5.83287.98118-2.38464,4.54365-2.99682,5.25837-5.4744.364-1.26178-.15973-2.61142-.03472-3.91869.32734-3.42283,4.63049-4.84393,8.06342-4.64939s7.17972,1.10618,10.09614-.71518c1.41407-.88311,2.40169-2.29662,3.64423-3.40818a10.82274,10.82274,0,0,1,12.568-1.09287c1.38063.85856,2.58527,2.04835,4.125,2.57019,3.151,1.06792,6.43846-.95269,9.73277-1.41848a8.0861,8.0861,0,0,1,6.77889,1.96365,5.54921,5.54921,0,0,1,1.01,6.686c1.93273-.32645,3.98079-.64221,5.8023.08175s3.21335,2.905,2.37066,4.67472a6.05576,6.05576,0,0,0-.735,1.50119c-.171,1.0296.8205,1.90986,1.82158,2.2051s2.0876.24,3.06773.59872c4.04919,1.48193,3.07759,7.95527,6.2646,10.85958a25.41622,25.41622,0,0,0,3.45482,2.11281,8.4062,8.4062,0,0,1,2.96417,10.15561c-.63881,1.41464-1.70919,2.76468-1.58024,4.3115.18086,2.1695,2.50546,3.35783,4.13683,4.79939a9.62473,9.62473,0,0,1,2.24041,11.05039c-1.49958,3.12814-4.74717,5.49944-5.07685,8.95275-.1433,1.50108.30776,2.99971.28208,4.5074a9.287,9.287,0,0,1-3.99193,7.01155,20.76464,20.76464,0,0,1-7.663,3.18852c-1.28776.30824-2.82439.79082-3.13606,2.07775-.36952,1.52585,1.33294,2.91435,1.15677,4.47439a2.59459,2.59459,0,0,1-1.0418,1.68634c-2.30448,1.80225-5.95147.25721-7.3606-2.30659s-1.229-5.67066-1.01054-8.588l.79458-10.60829c.24724-3.30077.22352-7.22049-2.46726-9.14818-2.97476-2.13114-7.30715-.40582-10.67124-1.84592-3.50523-1.50052-4.76265-5.892-4.62122-9.70232s1.23314-7.62654.60545-11.388c-.77818-4.66122-4.92422-7.794-9.11051-4.77343C814.14944,162.829,814.7847,167.05152,811.87686,168.76089Z" transform="translate(-69.5 -78.57247)" fill="#000000"></path><path d="M844.54759,258.61022S820.91815,268.062,820.91815,288.147s1.18147,46.66816-2.95368,55.5292-7.67957,11.81472-5.31663,18.90356,6.4981,5.90736,0,11.224-5.90736-3.54441-6.4981,5.31663,5.90736,10.04251,0,14.17767-21.2665,20.67576-14.7684,25.99239,23.62945,22.448,29.53681,15.94987,8.861-23.03871,17.13135-21.85724,9.45177,1.77221,8.2703-4.13515-6.4981-5.90736.59074-7.67957,10.04251,2.363,7.67957-3.54441-4.13516-8.27031.59073-14.76841,7.08884-8.2703,6.4981-14.7684,12.9962-64.981,12.9962-64.981S878.81029,253.88433,844.54759,258.61022Z" transform="translate(-69.5 -78.57247)" opacity="0.1"></path><path d="M838.0495,257.42875S814.42,266.88053,814.42,286.96556s1.18147,46.66815-2.95368,55.5292-7.67957,11.81472-5.31663,18.90355,6.4981,5.90737,0,11.224-5.90736-3.54442-6.49809,5.31663,5.90736,10.04251,0,14.17766-21.26651,20.67577-14.76841,25.99239,23.62945,22.448,29.53681,15.94988,8.861-23.03871,17.13135-21.85724,9.45178,1.77221,8.2703-4.13515-6.49809-5.90736.59074-7.67957,10.04251,2.36294,7.67957-3.54442-4.13515-8.2703.59074-14.7684,7.08883-8.27031,6.49809-14.7684,12.9962-64.981,12.9962-64.981S872.31219,252.70286,838.0495,257.42875Z" transform="translate(-69.5 -78.57247)" opacity="0.1"></path><path d="M841.00318,255.65654s-23.62945,9.45178-23.62945,29.53681,1.18147,46.66816-2.95368,55.5292-7.67957,11.81472-5.31663,18.90356,6.4981,5.90736,0,11.224-5.90736-3.54441-6.49809,5.31663,5.90736,10.04251,0,14.17767-21.26651,20.67576-14.76841,25.99239,23.62945,22.448,29.53681,15.94987,8.861-23.03871,17.13135-21.85724,9.45178,1.77221,8.2703-4.13515-6.49809-5.90736.59074-7.67957,10.04251,2.363,7.67957-3.54442-4.13515-8.2703.59074-14.7684,7.08883-8.27031,6.49809-14.7684,12.9962-64.981,12.9962-64.981S875.26587,250.93065,841.00318,255.65654Z" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M964.5,663.78694c0,51.68416,32.42393,93.50633,72.49367,93.50633" transform="translate(-69.5 -78.57247)" fill="#7F8DAA"></path><path d="M1036.99367,757.29327c0-52.26489,36.18322-94.557,80.89874-94.557" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M990.76582,668.47219c0,49.09446,20.67613,88.82108,46.22785,88.82108" transform="translate(-69.5 -78.57247)" fill="#1955BC"></path><path d="M1036.99367,757.29327c0-66.78291,41.82217-120.82279,93.50633-120.82279" transform="translate(-69.5 -78.57247)" fill="#7F8DAA"></path><path d="M1021.74287,757.9525s10.2808-.31664,13.37917-2.523,15.81445-4.84077,16.58308-1.30233,15.45013,17.59858,3.84316,17.6922-26.96943-1.808-30.06184-3.69167S1021.74287,757.9525,1021.74287,757.9525Z" transform="translate(-69.5 -78.57247)" fill="#a8a8a8"></path><path d="M1055.75542,770.58768c-11.607.09365-26.96942-1.808-30.06184-3.69167-2.355-1.43454-3.29349-6.582-3.60749-8.9569-.21746.00935-.34322.01338-.34322.01338s.65117,8.29153,3.74358,10.17525,18.45487,3.78532,30.06184,3.69167c3.35047-.027,4.50778-1.21907,4.44423-2.9846C1059.52707,769.9015,1058.24922,770.56757,1055.75542,770.58768Z" transform="translate(-69.5 -78.57247)" opacity="0.2"></path></svg>
                </IntroImg>
                <IntroAboutInfo>
                    <Title>Sobre mi</Title>
                    <Info>
                        Mi nombre es Peter Castillo y tengo 20 años, soy una persona responsable y exigente a la que le 
                        gusta estar aprendiendo nuevas cosas constantemente.
                    </Info>
                    <Info>
                        Me gusta desarrollar en React y espero poder entrar a un equipo en el cual pueda 
                        aplicar mis conocimientos sobre React, ademas de aprender de la personas que me rodeen.  
                    </Info>
                    <Info>
                        Uno de mis mayores hobbies es el gimnasio, me gusta ir todos los dias 
                        para despejar la mente y relajarme. 
                    </Info>
                </IntroAboutInfo>
            </ContactoIntro>

        </ContactoContainer>
    )
}

export default Contacto