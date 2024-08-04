def main
  n = gets.to_i
  adjacency_matrix = []

  n.times do
    adjacency_matrix << gets.split.map(&:to_i)
  end

  adjacency_matrix.each_with_index do |row, i|
    connected_vertices = []
    
    row.each_with_index do |value, j|
      if value == 1
        connected_vertices << (j + 1)
      end
    end

    puts connected_vertices.sort.join(" ")
  end
end

main
