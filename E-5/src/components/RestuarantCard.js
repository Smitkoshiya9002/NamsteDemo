import data from "../../Utils/Data";

const RestuarantCard = (props) => {
  const { res } = props;
  return (
    <div className="ResCard">
      <img src={data.IMG_CDN + res.info.cloudinaryImageId} alt="rescard" />
      <h3>{res.info.name}</h3>
      <h4>{res.info.cuisines.join(" ,")}</h4>
      <h4>{res.info.costForTwo}</h4>
      <h4>{res.info.avgRatingString}</h4>
    </div>
  );
};

export default RestuarantCard;
