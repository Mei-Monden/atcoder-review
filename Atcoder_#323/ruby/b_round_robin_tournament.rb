n = gets.to_i
s = Array.new(n) { gets.chomp }

win_counts = Array.new(n) { |i| [i + 1, 0] }

n.times do |i|
  n.times do |j|
    if s[i][j] == 'o'
      win_counts[i][1] += 1
    end
  end
end

win_counts.sort_by! { |player, wins| [-wins, player] }

puts win_counts.map(&:first).join(' ')
