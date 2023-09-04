import moment from "moment";

const ArticleCard = ({ article }) => {
  const formatDate = moment(article.created_at).utc().format("DD-MM-YYYY");
  return (
    <main>
      <section className="article-card">
        <div className="article-image">
          <img src={article.article_img_url} alt={article.title} />
        </div>
        <div className="blurred-textbox">
          <p>
            <strong>
              {article.title} ({article.topic}){" "}
            </strong>
            <br />
            By {article.author} <br />
            {formatDate}
            <br />
            <br />
            {article.body} <br />
          </p>
          <div className="vote-section">
            <p>Votes: {article.votes}</p>
            <button>Add vote</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleCard;

// const ArticleCard = ({ article }) => {
//     return (
//       <main>
//         <section className="article-card">
//           <div className="article-image">
//             <img src={article.article_img_url} alt={article.title} />
//           </div>
//           <p className="article-title">
//             {article.title} ({article.topic})
//           </p>
//           <p className="article-author">By {article.author}</p>
//           <p className="article-body">{article.body}</p>
//           <p className="article-date">{article.created_at}</p>
//           <div className="vote-section">
//             <p>Votes: {article.votes}</p>
//             <button>Add vote</button>
//           </div>
//         </section>
//       </main>
//     );
//   };

//   export default ArticleCard;
