def is_good_string(s)
  counts = Hash.new(0)
  s.each_char do |char|
    counts[char] += 1
  end

  occurrence_counts = counts.values

  frequency_counts = Hash.new(0)
  occurrence_counts.each do |count|
    frequency_counts[count] += 1
  end

  frequency_counts.values.all? { |count| count == 0 || count == 2 }
end

s = gets.chomp

if is_good_string(s)
  puts "Yes"
else
  puts "No"
end
