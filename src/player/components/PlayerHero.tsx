import './PlayerHero.scss';

interface IProps {
    name: string,
    backgroundUrl?: string,
}

export const PlayerHero = ({ backgroundUrl, name }: IProps) => {
  return (
    <div className="playerhero">
        <div className="playerhero__background" style={{backgroundImage: backgroundUrl}}></div>

        <div className="playerhero__content">
            <h1 className="playerhero__title">{name}</h1>
        </div>
    </div>
  )
}
