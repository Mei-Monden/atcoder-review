def is_palindrome?(str)
  str == str.reverse
end

def longest_palindrome(s)
  max_length = 0

  (0...s.length).each do |i|
    (i+1..s.length).each do |j|
      substring = s[i...j]
      if is_palindrome?(substring)
        max_length = [max_length, substring.length].max
      end
    end
  end

  max_length
end

s = gets.chomp
puts longest_palindrome(s)
