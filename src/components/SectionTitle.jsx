

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p className="italic text-yellow-500 text-center mt-10">{subHeading}</p>
            <h2 className="text-4xl py-3 border-t-2 border-b-2 text-center w-4/12 mt-2 mb-6 mx-auto">{heading}</h2>
        </div>
    );
};

export default SectionTitle;