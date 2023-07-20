import { BenefitType, SelectedPage } from "@/types"
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'
import ActionButton from "../ActionButton/ActionButton";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import EachBenefit from "./EachBenefit";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Welcome to our gym and fitness center, where you'll find state-of-the-art facilities for a cutting-edge workout experience. Our modern equipment, diverse studios, and focus on hygiene ensure a safe and effective fitness journey. Join us and elevate your fitness routine to new heights.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Discover a world of fitness possibilities with our gym's 100+ of Diverse Classes. From high-intensity workouts to calming practices, we offer a wide range of classes to suit every fitness level and interest.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Train with confidence alongside our Expert and Pro Trainers. Our highly skilled and certified professionals are dedicated to guiding you on your fitness journey, helping you achieve optimal results and surpass your goals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Header>MORE THAN JUST GYM.</Header>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <EachBenefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Header>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Header>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Welcome to our fitness centre, where millions of happy members are achieving their fitness goals and getting fit! With a vast community of dedicated individuals, we offer a supportive and motivating environment to help you embark on your fitness journey.Whether you're a beginner or an experienced fitness enthusiast, our comprehensive range of workout programs, personalized training sessions, and expert advice caters to every fitness level.
              </p>
              <p className="mb-5">
              Join our thriving community today and experience the joy of improved health, increased strength, and a happier, healthier lifestyle. Let us be your partner in achieving your fitness aspirations – together, we can make your fitness dreams a reality.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits