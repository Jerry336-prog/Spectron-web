export default function Stats() {
  return (
    <div className="stats-placeholder p-6 bg-gray-50 border border-gray-100 rounded-lg">
      <h3 className="font-semibold text-lg mb-2">Key Metrics</h3>
      <div className="flex justify-around mt-4">
        <div>
          <span className="block text-2xl font-bold">100x</span>
          <span className="text-xs text-gray-400">Speedup</span>
        </div>
        <div>
          <span className="block text-2xl font-bold">99.9%</span>
          <span className="text-xs text-gray-400">Uptime</span>
        </div>
      </div>
    </div>
  )
}
