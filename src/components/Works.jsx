import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image, // kept for backward compatibility
  images, // new optional array of images
  source_code_link,
}) => {
  const imgs = images && images.length ? images : image ? [image] : [];
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + imgs.length) % imgs.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % imgs.length);
  };

  const modalPrev = (e) => {
    e.stopPropagation();
    setModalIndex((i) => (i - 1 + imgs.length) % imgs.length);
  };
  const modalNext = (e) => {
    e.stopPropagation();
    setModalIndex((i) => (i + 1) % imgs.length);
  };

  // autoplay: advance every 3s, pause on hover/touch
  React.useEffect(() => {
    if (!imgs || imgs.length <= 1) return;
    const interval = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs.length, paused]);

  // When modal opens, lock page scroll and add Escape-key handler
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };

    if (modalOpen) {
      // lock background scrolling
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }

    return () => {
      // restore scroll and remove listener
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className='w-full'>
          <div className='relative w-full h-[230px] sm:h-[260px]'>
            {imgs.length > 0 ? (
              <>
                <img
                  src={imgs[current]}
                  alt={`project_image_${current}`}
                  className='w-full h-full object-cover rounded-2xl cursor-zoom-in'
                  onClick={() => {
                    setModalIndex(current);
                    setModalOpen(true);
                  }}
                />

                {/* Prev/Next buttons */}
                {imgs.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center z-40 pointer-events-auto'
                      aria-label='previous'
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center z-40 pointer-events-auto'
                      aria-label='next'
                    >
                      ›
                    </button>
                  </>
                )}

                {/* dots */}
                {imgs.length > 1 && (
                  <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-40 pointer-events-auto'>
                    {imgs.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrent(i);
                        }}
                        className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}
                        aria-label={`go-to-${i}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className='w-full h-full flex items-center justify-center rounded-2xl bg-[#111827] text-white'>No image</div>
            )}

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
          {/* Modal / Lightbox */}
          {modalOpen && (
            <div
              className='fixed inset-0 z-[9999] bg-black/70 overflow-auto'
              onClick={() => setModalOpen(false)}
            >
              <div className='flex items-center justify-center min-h-screen px-4 py-8'>
                <div className='relative mx-auto max-w-[90%] max-h-[90%]'>
                  <button
                    className='absolute top-3 md:top-16 right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center text-black z-[10000] shadow-lg'
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalOpen(false);
                    }}
                    aria-label='close'
                    title='Close (Esc)'
                  >
                    ×
                  </button>
                  <img
                    src={imgs[modalIndex]}
                    alt={`modal_image_${modalIndex}`}
                    className='w-full h-auto max-h-[90vh] rounded-lg'
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Modal prev/next buttons (inside modal) */}
                  {imgs.length > 1 && (
                    <>
                      <button
                        onClick={modalPrev}
                        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-[10001]'
                        aria-label='modal-previous'
                        title='Previous'
                      >
                        ‹
                      </button>
                      <button
                        onClick={modalNext}
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-[10001]'
                        aria-label='modal-next'
                        title='Next'
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
