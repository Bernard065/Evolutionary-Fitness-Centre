import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
    
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowercasepage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
        className={`${selectedPage === lowercasepage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowercasepage}`}
        onClick={() => setSelectedPage(lowercasepage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link