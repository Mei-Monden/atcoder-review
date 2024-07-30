s = gets.chomp

unique_substrings = Set.new

(0...s.length).each do |i|
  (i...s.length).each do |j|
    unique_substrings.add(s[i..j])
  end
end

puts unique_substrings.size
