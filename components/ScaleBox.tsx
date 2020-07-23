import styles from '@/styles/components/ScaleBox.module.scss';
import classNames from 'classnames';

type ScaleBoxProps = {
  className?: string;
}
const ScaleBox: React.FC<ScaleBoxProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}

ScaleBox.displayName = 'ScaleBox';

export default ScaleBox;
