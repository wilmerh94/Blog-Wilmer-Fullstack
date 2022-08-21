import { Loading } from 'src/component/Loading/Loading'
import { useFirestore } from 'src/Hooks/useFirestore'

export const Dashboard = () => {
  const { data, error, loading } = useFirestore()
  if (loading) return <Loading />
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Users:</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
