import { ClassType, SelectedPage } from "@/types"
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Training Classes",
        description: "Transform your fitness with our Training Classes. Personalized workouts led by expert instructors to achieve your goals.",
        image: image1,
    },
    {
        name: "Fitness Classes",
        description: "Experience a wide variety of Fitness Classes designed for all fitness levels. Join our energetic group sessions for a rewarding and invigorating workout.",
        image: image2,
    },
    {
        name: "Weight Training Classes",
        description: "Build muscle and boost your strength in our Weight Training Classes. Expert instructors guide you through effective workouts for maximum results.",
        image: image3,
    },
    {
        name: "Yoga Classes",
        description: "Discover tranquility in our Yoga Classes. Experienced instructors lead revitalizing sessions to nurture your mind and body.",
        image: image4,
    },
    {
        name: "Ab Core Classes",
        description: "Get toned abs with our Ab Core Classes. Expert trainers lead targeted workouts for a stronger core",
        image: image5,
    },
    {
        name: "Adventure Classes",
        description: "Experience thrilling adventures in our Adventure Classes. Explore new challenges and push your limits in a safe environment.",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="ourclasses"
        className="w-full bg-primary-100 py-40"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:w-3/5">
                    <Header>OUR CLASSES</Header>
                    <p className="py-5">
                    Our Classes offer a diverse range of fitness programs designed to cater to all fitness levels and goals. From high-energy group workouts to personalized training sessions, we have something for everyone. Explore our dynamic group classes, including heart-pumping cardio, strength-building sessions, and mind-body practices like yoga and Pilates
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses